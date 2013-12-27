<?php

class NetworkProviderController extends Controller
{
	public function actionIndex()
	{
		$this->render('index');
	}
  
  public function actionTest()
  {
    $this->renderPartial('testjson');
  }
  
  public function actionImportData()
  {
    $i = $_GET['i'];
    // for ($i=25; $i < 26; $i++)  
    // {
      $name = sprintf("%03s",$i);
      // echo ;
      $json = file_get_contents('http://localhost/data/find_nearby_'. $name .'.html');
      $data = CJSON::decode($json);
      // next();
      $connection=Yii::app()->db;   // assuming you have configured a "db" connection
      // If not, you may explicitly create a connection:
      // $connection=new CDbConnection($dsn,$username,$password);
      if ($data['networks']) {
        $sql = 'INSERT INTO `networks` (`mac`, `ssid`, `latitude`, `longitude`, `avg_accuracy`) VALUES ';
        foreach ($data['networks'] as $key => $value) {
  //        
          // if(!Networks::model()->exists('mac="'.$value['mac'] . '"')){
            // $network = new Networks;
            $networksql = '("'. $value['mac'] .'","'. mysql_escape_string($value['ssid']) .'",'. $value['latitude'] .','. $value['longitude'] .','. $value['avg_accuracy'] . '),';
            $sql = $sql . $networksql;
            // $network->mac = $value['mac'];
            // $network->ssid = $value['ssid'];
            // $network->latitude = $value['latitude'];
            // $network->longitude = $value['longitude'];
            // $network->avg_accuracy = $value['avg_accuracy'];
            // $network->save();
          // } else {
            // break;
          // }
          //         
          // // echo $network->mac;
          // // $network->
        }
        $sql = substr($sql,0,-1).';';
        $command=$connection->createCommand($sql);
        // $command->execute();
        echo $sql;  
      }
      
      // $i++;
      // if ($i<=  600) {
        // header("Location: http://localhost/mbmfreimap/NetworkProvider/importdata?i=".$i);
      // }
      
    
    // curl_init()
    // $this->renderPartial('testjson');
  }
  
  public function actionCreateLink()
  {
    $lat = 20;
    $long = -98;   
    while ($lat > 18) {
      $lat1 = $lat - 0.1;
      while ($long > -100) {        
        $long1 = $long - 0.1;        
        // echo "http://www.zonagratis.com.br/api/zg/wifi/find_nearby/?type=ALL&north_east_latitude=$lat&north_east_longitude=$long&south_west_latitude=$lat1&south_west_longitude=$long1&max_results=7000000";
        // echo "<a href=\"http://www.zonagratis.com.br/api/zg/wifi/find_nearby/?type=ALL&north_east_latitude=$lat&north_east_longitude=$long&south_west_latitude=$lat1&south_west_longitude=$long1&max_results=7000000\">data</a>";
        echo "<br>";
        $long = $long1;
      }
      $lat = $lat1;
      $long = -98; 
    }
  }
  
  public function actionGet()
  {
    
    $origin = (isset($_GET['origin']) ? $_GET['origin'] : 'WEB');
    $north_east_latitude = (isset($_GET['north_east_latitude']) ? $_GET['north_east_latitude'] : '0');
    $north_east_longitude = (isset($_GET['north_east_longitude']) ? $_GET['north_east_longitude'] : '0');
    $south_west_latitude = (isset($_GET['south_west_latitude']) ? $_GET['south_west_latitude'] : '0');
    $south_west_longitude = (isset($_GET['south_west_longitude']) ? $_GET['south_west_longitude'] : '0');
    $max_results = (isset($_GET['max_results']) ? $_GET['max_results'] : '500');
    
    $count=Networks::model()->count(
      'latitude<=:north_east_latitude
      AND latitude>=:south_west_latitude 
      AND longitude<=:north_east_longitude
      AND longitude>=:south_west_longitude',array(
        ':north_east_latitude' => $north_east_latitude,
        ':south_west_latitude' => $south_west_latitude,
        ':north_east_longitude'=> $north_east_longitude,
        ':south_west_longitude'=> $south_west_longitude
      )
    );
    
    
    $var = array();
    if ($count > 500 || $count > $max_results) {
      $var = array(
        'success'         =>  true,
        'networks' => array(),
        'total_networks'  =>  $count,
      );
    } else {
      
      $networks = Networks::model()->findAll(
        'latitude<=:north_east_latitude
        AND latitude>=:south_west_latitude 
        AND longitude<=:north_east_longitude
        AND longitude>=:south_west_longitude',array(
          ':north_east_latitude' => $north_east_latitude,
          ':south_west_latitude' => $south_west_latitude,
          ':north_east_longitude'=> $north_east_longitude,
          ':south_west_longitude'=> $south_west_longitude
        )
      );
      $var['success'] = true;
      foreach ($networks as $key => $value) {
        $network = null;
        $network['mac'] = $value->mac;
        $network['ssid'] = $value->ssid;
        $network['latitude'] = $value->latitude;
        $network['longitude'] = $value->longitude;
        $network['avg_accuracy'] = $value->avg_accuracy;      
        $var['networks'][] = $network;        
      }
       
      $var['total_networks'] = $count;
    }
    print CJSON::encode($var);
    // $this->renderPartial('testjson');
  }

	// Uncomment the following methods and override them if needed
	/*
	public function filters()
	{
		// return the filter configuration for this controller, e.g.:
		return array(
			'inlineFilterName',
			array(
				'class'=>'path.to.FilterClass',
				'propertyName'=>'propertyValue',
			),
		);
	}

	public function actions()
	{
		// return external action classes, e.g.:
		return array(
			'action1'=>'path.to.ActionClass',
			'action2'=>array(
				'class'=>'path.to.AnotherActionClass',
				'propertyName'=>'propertyValue',
			),
		);
	}
	*/
}
