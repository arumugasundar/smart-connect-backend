const mongoose = require('mongoose');

const Event = new mongoose.Schema({
    "_id": {
      "type": "String"
    },
    "Day": {
      "type": "String"
    },
    "MonthYear": {
      "type": "Date"
    },
    "Year": {
      "type": "Date"
    },
    "FractionDate": {
      "type": "String"
    },
    "Actor1Code": {
      "type": "String"
    },
    "Actor1Name": {
      "type": "String"
    },
    "Actor1CountryCode": {
      "type": "String"
    },
    "Actor1KnownGroupCode": {
      "type": "String"
    },
    "Actor1EthnicCode": {
      "type": "String"
    },
    "Actor1Religion1Code": {
      "type": "String"
    },
    "Actor1Religion2Code": {
      "type": "String"
    },
    "Actor1Type1Code": {
      "type": "String"
    },
    "Actor1Type2Code": {
      "type": "String"
    },
    "Actor1Type3Code": {
      "type": "String"
    },
    "Actor2Code": {
      "type": "String"
    },
    "Actor2Name": {
      "type": "String"
    },
    "Actor2CountryCode": {
      "type": "String"
    },
    "Actor2KnownGroupCode": {
      "type": "String"
    },
    "Actor2EthnicCode": {
      "type": "String"
    },
    "Actor2Religion1Code": {
      "type": "String"
    },
    "Actor2Religion2Code": {
      "type": "String"
    },
    "Actor2Type1Code": {
      "type": "String"
    },
    "Actor2Type2Code": {
      "type": "String"
    },
    "Actor2Type3Code": {
      "type": "String"
    },
    "IsRootEvent": {
      "type": "Date"
    },
    "EventCode": {
      "type": "Date"
    },
    "EventBaseCode": {
      "type": "Date"
    },
    "EventRootCode": {
      "type": "String"
    },
    "QuadClass": {
      "type": "Date"
    },
    "GoldsteinScale": {
      "type": "String"
    },
    "NumMentions": {
      "type": "Date"
    },
    "NumSources": {
      "type": "Date"
    },
    "NumArticles": {
      "type": "Date"
    },
    "AvgTone": {
      type: mongoose.Decimal128
    },
    "Actor1Geo_Type": {
      "type": "Date"
    },
    "Actor1Geo_Fullname": {
      "type": "String"
    },
    "Actor1Geo_CountryCode": {
      "type": "String"
    },
    "Actor1Geo_ADM1Code": {
      "type": "String"
    },
    "Actor1Geo_ADM2Code": {
      "type": "String"
    },
    "Actor1Geo_Lat": {
      "type": "Date"
    },
    "Actor1Geo_Long": {
      "type": "String"
    },
    "Actor1Geo_FeatureID": {
      "type": "String"
    },
    "Actor2Geo_Type": {
      "type": "Date"
    },
    "Actor2Geo_Fullname": {
      "type": "String"
    },
    "Actor2Geo_CountryCode": {
      "type": "String"
    },
    "Actor2Geo_ADM1Code": {
      "type": "String"
    },
    "Actor2Geo_ADM2Code": {
      "type": "String"
    },
    "Actor2Geo_Lat": {
      "type": "String"
    },
    "Actor2Geo_Long": {
      "type": "String"
    },
    "Actor2Geo_FeatureID": {
      "type": "String"
    },
    "ActionGeo_Type": {
      "type": "Date"
    },
    "ActionGeo_Fullname": {
      "type": "String"
    },
    "ActionGeo_CountryCode": {
      "type": "String"
    },
    "ActionGeo_ADM1Code": {
      "type": "String"
    },
    "ActionGeo_ADM2Code": {
      "type": "String"
    },
    "ActionGeo_Lat": {
      "type": "Date"
    },
    "ActionGeo_Long": {
      "type": "String"
    },
    "ActionGeo_FeatureID": {
      "type": "String"
    },
    "DATEADDED": {
      "type": "String"
    },
    "SOURCEURL": {
      "type": "String"
    },
    "downloadId": {
      "type": "String"
    }
  });

module.exports = mongoose.model("Event", Event);