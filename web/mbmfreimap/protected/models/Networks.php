<?php

/**
 * This is the model class for table "networks".
 *
 * The followings are the available columns in table 'networks':
 * @property integer $id
 * @property string $mac
 * @property string $ssid
 * @property string $latitude
 * @property string $longitude
 * @property string $avg_accuracy
 * @property string $authtype
 * @property string $username
 * @property string $password
 */
class Networks extends CActiveRecord
{
	/**
	 * Returns the static model of the specified AR class.
	 * @return Networks the static model class
	 */
	public static function model($className=__CLASS__)
	{
		return parent::model($className);
	}

	/**
	 * @return string the associated database table name
	 */
	public function tableName()
	{
		return 'networks';
	}

	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules()
	{
		// NOTE: you should only define rules for those attributes that
		// will receive user inputs.
		return array(
			array('mac', 'required'),
			array('mac', 'length', 'max'=>17),
			array('ssid, authtype, username, password', 'length', 'max'=>45),
			array('latitude, longitude', 'length', 'max'=>20),
			array('avg_accuracy', 'length', 'max'=>22),
			// The following rule is used by search().
			// Please remove those attributes that should not be searched.
			array('id, mac, ssid, latitude, longitude, avg_accuracy, authtype, username, password', 'safe', 'on'=>'search'),
		);
	}

	/**
	 * @return array relational rules.
	 */
	public function relations()
	{
		// NOTE: you may need to adjust the relation name and the related
		// class name for the relations automatically generated below.
		return array(
		);
	}

	/**
	 * @return array customized attribute labels (name=>label)
	 */
	public function attributeLabels()
	{
		return array(
			'id' => 'ID',
			'mac' => 'Mac',
			'ssid' => 'Ssid',
			'latitude' => 'Latitude',
			'longitude' => 'Longitude',
			'avg_accuracy' => 'Avg Accuracy',
			'authtype' => 'Authtype',
			'username' => 'Username',
			'password' => 'Password',
		);
	}

	/**
	 * Retrieves a list of models based on the current search/filter conditions.
	 * @return CActiveDataProvider the data provider that can return the models based on the search/filter conditions.
	 */
	public function search()
	{
		// Warning: Please modify the following code to remove attributes that
		// should not be searched.

		$criteria=new CDbCriteria;

		$criteria->compare('id',$this->id);
		$criteria->compare('mac',$this->mac,true);
		$criteria->compare('ssid',$this->ssid,true);
		$criteria->compare('latitude',$this->latitude,true);
		$criteria->compare('longitude',$this->longitude,true);
		$criteria->compare('avg_accuracy',$this->avg_accuracy,true);
		$criteria->compare('authtype',$this->authtype,true);
		$criteria->compare('username',$this->username,true);
		$criteria->compare('password',$this->password,true);

		return new CActiveDataProvider($this, array(
			'criteria'=>$criteria,
		));
	}
}