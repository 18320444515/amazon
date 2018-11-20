define({ "api": [
  {
    "type": "get",
    "url": "/keyword/detail/nlIctInsertDetail.do",
    "title": "更新详情数据源",
    "group": "KeywordDetail",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\t\"ok\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/com/amazon/keyword/controller/KeywordDetailController.java",
    "groupTitle": "KeywordDetail",
    "name": "GetKeywordDetailNlictinsertdetailDo"
  },
  {
    "type": "get",
    "url": "/keyword/detail/nlIctQueryDetail.do",
    "title": "查询详情数据",
    "group": "KeywordDetail",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "startTime",
            "description": "<p>开始范围</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "endTime",
            "description": "<p>结束范围</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>页数</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "rows",
            "description": "<p>每页数量</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>detail的id</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "disableFlag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int[]",
            "optional": false,
            "field": "ids",
            "description": "<p>id的数组</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "pageStart",
            "description": "<p>开始页码?</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "keywordId",
            "description": "<p>keyword的id</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "orders",
            "description": "<p>顺序?</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "impression",
            "description": "<p>印象值</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "sbidLow",
            "description": "<p>低建议标价</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "sbidMedian",
            "description": "<p>中建议标价</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "sbidHigh",
            "description": "<p>高建议标价</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "keywordBid",
            "description": "<p>综合建议标价</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "spend",
            "description": "<p>花费值</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "cpc",
            "description": "<p>cpc值</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "sales",
            "description": "<p>销量值?</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "acos",
            "description": "<p>acos值</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Request:",
          "content": "{\n\tstartTime: 1541692800000\nendTime: 1541865600000\npage: 1\nrows: 4\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "{\n[{\"id\":1,\"disableFlag\":null,\"ids\":null,\"rows\":0,\"page\":0,\"pageStart\":0,\"name\":\"lunch bags men\",\"volume\":0,\"groupId\":1,\"matchType\":\"EXACT\",\"latestDetail\":{\"id\":1,\"disableFlag\":null,\"ids\":null,\"rows\":0,\"page\":0,\"pageStart\":0,\"keywordId\":1,\"sbidLow\":0.75,\"sbidMedian\":0.75,\"sbidHigh\":0.75,\"keywordBid\":0.75,\"impression\":2695,\"spend\":17.28,\"cpc\":0.6,\"orders\":1,\"sales\":34.98,\"createTime\":1541865600000,\"acos\":49.3997,\"startTime\":null,\"endTime\":null},\"detailList\":[{\"id\":2002,\"disableFlag\":null,\"ids\":null,\"rows\":0,\"page\":0,\"pageStart\":0,\"keywordId\":1,\"sbidLow\":0.75,\"sbidMedian\":0.75,\"sbidHigh\":0.75,\"keywordBid\":0.75,\"impression\":2426,\"spend\":13.62,\"cpc\":0.62,\"orders\":2,\"sales\":69.96,\"createTime\":1541692800000,\"acos\":19.4683,\"startTime\":null,\"endTime\":null},{\"id\":1001,\"disableFlag\":null,\"ids\":null,\"rows\":0,\"page\":0,\"pageStart\":0,\"keywordId\":1,\"sbidLow\":0.75,\"sbidMedian\":0.75,\"sbidHigh\":0.75,\"keywordBid\":0.75,\"impression\":2695,\"spend\":17.28,\"cpc\":0.6,\"orders\":1,\"sales\":34.98,\"createTime\":1541779200000,\"acos\":49.3997,\"startTime\":null,\"endTime\":null},{\"id\":1,\"disableFlag\":null,\"ids\":null,\"rows\":0,\"page\":0,\"pageStart\":0,\"keywordId\":1,\"sbidLow\":0.75,\"sbidMedian\":0.75,\"sbidHigh\":0.75,\"keywordBid\":0.75,\"impression\":2695,\"spend\":17.28,\"cpc\":0.6,\"orders\":1,\"sales\":34.98,\"createTime\":1541865600000,\"acos\":49.3997,\"startTime\":null,\"endTime\":null}],\"rankList\":[],\"startTime\":null,\"endTime\":null},{\"id\":2,\"disableFlag\":null,\"ids\":null,\"rows\":0,\"page\":0,\"pageStart\":0,\"name\":\"lunch box\",\"volume\":0,\"groupId\":1,\"matchType\":\"BROAD\",\"latestDetail\":{\"id\":2,\"disableFlag\":null,\"ids\":null,\"rows\":0,\"page\":0,\"pageStart\":0,\"keywordId\":2,\"sbidLow\":0.34,\"sbidMedian\":0.46,\"sbidHigh\":0.63,\"keywordBid\":0.55,\"impression\":2538,\"spend\":4.61,\"cpc\":0.42,\"orders\":0,\"sales\":0.0,\"createTime\":1541865600000,\"acos\":0.0,\"startTime\":null,\"endTime\":null},\"detailList\":[{\"id\":2001,\"disableFlag\":null,\"ids\":null,\"rows\":0,\"page\":0,\"pageStart\":0,\"keywordId\":2,\"sbidLow\":0.34,\"sbidMedian\":0.46,\"sbidHigh\":0.63,\"keywordBid\":0.55,\"impression\":5959,\"spend\":3.11,\"cpc\":0.28,\"orders\":0,\"sales\":0.0,\"createTime\":1541692800000,\"acos\":0.0,\"startTime\":null,\"endTime\":null},{\"id\":1002,\"disableFlag\":null,\"ids\":null,\"rows\":0,\"page\":0,\"pageStart\":0,\"keywordId\":2,\"sbidLow\":0.34,\"sbidMedian\":0.46,\"sbidHigh\":0.63,\"keywordBid\":0.55,\"impression\":2538,\"spend\":4.61,\"cpc\":0.42,\"orders\":0,\"sales\":0.0,\"createTime\":1541779200000,\"acos\":0.0,\"startTime\":null,\"endTime\":null},{\"id\":2,\"disableFlag\":null,\"ids\":null,\"rows\":0,\"page\":0,\"pageStart\":0,\"keywordId\":2,\"sbidLow\":0.34,\"sbidMedian\":0.46,\"sbidHigh\":0.63,\"keywordBid\":0.55,\"impression\":2538,\"spend\":4.61,\"cpc\":0.42,\"orders\":0,\"sales\":0.0,\"createTime\":1541865600000,\"acos\":0.0,\"startTime\":null,\"endTime\":null}],\"rankList\":[{\"id\":110,\"disableFlag\":null,\"ids\":null,\"rows\":0,\"page\":0,\"pageStart\":0,\"keywordId\":2,\"keywordRank\":101,\"createTime\":1541719080000,\"startTime\":null,\"endTime\":null},{\"id\":111,\"disableFlag\":null,\"ids\":null,\"rows\":0,\"page\":0,\"pageStart\":0,\"keywordId\":2,\"keywordRank\":104,\"createTime\":1541802060000,\"startTime\":null,\"endTime\":null},{\"id\":112,\"disableFlag\":null,\"ids\":null,\"rows\":0,\"page\":0,\"pageStart\":0,\"keywordId\":2,\"keywordRank\":102,\"createTime\":1541844060000,\"startTime\":null,\"endTime\":null}],\"startTime\":null,\"endTime\":null},{\"id\":3,\"disableFlag\":null,\"ids\":null,\"rows\":0,\"page\":0,\"pageStart\":0,\"name\":\"meal prep bag\",\"volume\":0,\"groupId\":null,\"matchType\":\"EXACT\",\"latestDetail\":{\"id\":3,\"disableFlag\":null,\"ids\":null,\"rows\":0,\"page\":0,\"pageStart\":0,\"keywordId\":3,\"sbidLow\":0.66,\"sbidMedian\":0.8,\"sbidHigh\":1.0,\"keywordBid\":0.8,\"impression\":1896,\"spend\":4.28,\"cpc\":0.48,\"orders\":0,\"sales\":0.0,\"createTime\":1541865600000,\"acos\":0.0,\"startTime\":null,\"endTime\":null},\"detailList\":[{\"id\":2004,\"disableFlag\":null,\"ids\":null,\"rows\":0,\"page\":0,\"pageStart\":0,\"keywordId\":3,\"sbidLow\":0.66,\"sbidMedian\":0.8,\"sbidHigh\":1.0,\"keywordBid\":0.8,\"impression\":1386,\"spend\":3.28,\"cpc\":0.66,\"orders\":0,\"sales\":0.0,\"createTime\":1541692800000,\"acos\":0.0,\"startTime\":null,\"endTime\":null},{\"id\":1003,\"disableFlag\":null,\"ids\":null,\"rows\":0,\"page\":0,\"pageStart\":0,\"keywordId\":3,\"sbidLow\":0.66,\"sbidMedian\":0.8,\"sbidHigh\":1.0,\"keywordBid\":0.8,\"impression\":1896,\"spend\":4.28,\"cpc\":0.48,\"orders\":0,\"sales\":0.0,\"createTime\":1541779200000,\"acos\":0.0,\"startTime\":null,\"endTime\":null},{\"id\":3,\"disableFlag\":null,\"ids\":null,\"rows\":0,\"page\":0,\"pageStart\":0,\"keywordId\":3,\"sbidLow\":0.66,\"sbidMedian\":0.8,\"sbidHigh\":1.0,\"keywordBid\":0.8,\"impression\":1896,\"spend\":4.28,\"cpc\":0.48,\"orders\":0,\"sales\":0.0,\"createTime\":1541865600000,\"acos\":0.0,\"startTime\":null,\"endTime\":null}],\"rankList\":[],\"startTime\":null,\"endTime\":null},{\"id\":4,\"disableFlag\":null,\"ids\":null,\"rows\":0,\"page\":0,\"pageStart\":0,\"name\":\"lunch totes\",\"volume\":0,\"groupId\":null,\"matchType\":\"BROAD\",\"latestDetail\":{\"id\":4,\"disableFlag\":null,\"ids\":null,\"rows\":0,\"page\":0,\"pageStart\":0,\"keywordId\":4,\"sbidLow\":0.38,\"sbidMedian\":0.46,\"sbidHigh\":0.68,\"keywordBid\":0.75,\"impression\":1077,\"spend\":2.48,\"cpc\":0.62,\"orders\":0,\"sales\":0.0,\"createTime\":1541865600000,\"acos\":0.0,\"startTime\":null,\"endTime\":null},\"detailList\":[{\"id\":2005,\"disableFlag\":null,\"ids\":null,\"rows\":0,\"page\":0,\"pageStart\":0,\"keywordId\":4,\"sbidLow\":0.38,\"sbidMedian\":0.46,\"sbidHigh\":0.68,\"keywordBid\":0.75,\"impression\":1298,\"spend\":1.42,\"cpc\":0.47,\"orders\":0,\"sales\":0.0,\"createTime\":1541692800000,\"acos\":0.0,\"startTime\":null,\"endTime\":null},{\"id\":1004,\"disableFlag\":null,\"ids\":null,\"rows\":0,\"page\":0,\"pageStart\":0,\"keywordId\":4,\"sbidLow\":0.38,\"sbidMedian\":0.46,\"sbidHigh\":0.68,\"keywordBid\":0.75,\"impression\":1077,\"spend\":2.48,\"cpc\":0.62,\"orders\":0,\"sales\":0.0,\"createTime\":1541779200000,\"acos\":0.0,\"startTime\":null,\"endTime\":null},{\"id\":4,\"disableFlag\":null,\"ids\":null,\"rows\":0,\"page\":0,\"pageStart\":0,\"keywordId\":4,\"sbidLow\":0.38,\"sbidMedian\":0.46,\"sbidHigh\":0.68,\"keywordBid\":0.75,\"impression\":1077,\"spend\":2.48,\"cpc\":0.62,\"orders\":0,\"sales\":0.0,\"createTime\":1541865600000,\"acos\":0.0,\"startTime\":null,\"endTime\":null}],\"rankList\":[],\"startTime\":null,\"endTime\":null}]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/com/amazon/keyword/controller/KeywordDetailController.java",
    "groupTitle": "KeywordDetail",
    "name": "GetKeywordDetailNlictquerydetailDo"
  },
  {
    "type": "get",
    "url": "/keyword/main/nlIctQueryAllDataById.do",
    "title": "通过id查询",
    "group": "Keyword",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>关键词名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "matchType",
            "description": "<p>匹配规则</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "startTime",
            "description": "<p>开始范围</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "endTime",
            "description": "<p>结束范围</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "groupId",
            "description": "<p>分组id</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "volume",
            "description": "<p>数量?</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>页数</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "rows",
            "description": "<p>每页的数量</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>主键id</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "disableFlag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int[]",
            "optional": false,
            "field": "ids",
            "description": "<p>id的数组</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "pageStart",
            "description": "<p>开始页码?</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Request:",
          "content": "{\n\tid:1\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "{\n    \"id\": 1,\n    \"disableFlag\": null,\n    \"ids\": null,\n    \"rows\": 0,\n    \"page\": 0,\n    \"pageStart\": 0,\n    \"name\": \"lunch bags men\",\n    \"volume\": 0,\n    \"groupId\": 1,\n    \"matchType\": \"EXACT\",\n    \"latestDetail\": {\n        \"id\": 1,\n        \"disableFlag\": null,\n        \"ids\": null,\n        \"rows\": 0,\n        \"page\": 0,\n        \"pageStart\": 0,\n        \"keywordId\": 1,\n        \"sbidLow\": 0.75,\n        \"sbidMedian\": 0.75,\n        \"sbidHigh\": 0.75,\n        \"keywordBid\": 0.75,\n        \"impression\": 2695,\n        \"spend\": 17.28,\n        \"cpc\": 0.6,\n        \"orders\": 1,\n        \"sales\": 34.98,\n        \"createTime\": 1541865600000,\n        \"acos\": 49.3997,\n        \"startTime\": null,\n        \"endTime\": null\n    },\n    \"detailList\": [\n        {\n            \"id\": 2002,\n            \"disableFlag\": null,\n            \"ids\": null,\n            \"rows\": 0,\n            \"page\": 0,\n            \"pageStart\": 0,\n            \"keywordId\": 1,\n            \"sbidLow\": 0.75,\n            \"sbidMedian\": 0.75,\n            \"sbidHigh\": 0.75,\n            \"keywordBid\": 0.75,\n            \"impression\": 2426,\n            \"spend\": 13.62,\n            \"cpc\": 0.62,\n            \"orders\": 2,\n            \"sales\": 69.96,\n            \"createTime\": 1541692800000,\n            \"acos\": 19.4683,\n            \"startTime\": null,\n            \"endTime\": null\n        },\n        {\n            \"id\": 1001,\n            \"disableFlag\": null,\n            \"ids\": null,\n            \"rows\": 0,\n            \"page\": 0,\n            \"pageStart\": 0,\n            \"keywordId\": 1,\n            \"sbidLow\": 0.75,\n            \"sbidMedian\": 0.75,\n            \"sbidHigh\": 0.75,\n            \"keywordBid\": 0.75,\n            \"impression\": 2695,\n            \"spend\": 17.28,\n            \"cpc\": 0.6,\n            \"orders\": 1,\n            \"sales\": 34.98,\n            \"createTime\": 1541779200000,\n            \"acos\": 49.3997,\n            \"startTime\": null,\n            \"endTime\": null\n        },\n        {\n            \"id\": 1,\n            \"disableFlag\": null,\n            \"ids\": null,\n            \"rows\": 0,\n            \"page\": 0,\n            \"pageStart\": 0,\n            \"keywordId\": 1,\n            \"sbidLow\": 0.75,\n            \"sbidMedian\": 0.75,\n            \"sbidHigh\": 0.75,\n            \"keywordBid\": 0.75,\n            \"impression\": 2695,\n            \"spend\": 17.28,\n            \"cpc\": 0.6,\n            \"orders\": 1,\n            \"sales\": 34.98,\n            \"createTime\": 1541865600000,\n            \"acos\": 49.3997,\n            \"startTime\": null,\n            \"endTime\": null\n        }\n    ],\n    \"rankList\": [],\n    \"startTime\": null,\n    \"endTime\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/com/amazon/keyword/controller/KeywordController.java",
    "groupTitle": "Keyword",
    "name": "GetKeywordMainNlictqueryalldatabyidDo"
  },
  {
    "type": "get",
    "url": "/keyword/main/nlIctQueryAllDataList.do",
    "title": "获取关键词列表",
    "group": "Keyword",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>关键词名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "matchType",
            "description": "<p>匹配规则</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "startTime",
            "description": "<p>开始范围</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "endTime",
            "description": "<p>结束范围</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "groupId",
            "description": "<p>分组id</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "volume",
            "description": "<p>数量?</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>页数</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "rows",
            "description": "<p>每页的数量</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>主键id</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "disableFlag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int[]",
            "optional": false,
            "field": "ids",
            "description": "<p>id的数组</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "pageStart",
            "description": "<p>开始页码?</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Request:",
          "content": "{\n\tstartTime:1541692800000\nendTime:1541865600000\npage:1\nrows:4\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "{\n[\n    {\n        \"id\": 1,\n        \"disableFlag\": null,\n        \"ids\": null,\n        \"rows\": 0,\n        \"page\": 0,\n        \"pageStart\": 0,\n        \"name\": \"lunch bags men\",\n        \"volume\": 0,\n        \"groupId\": 1,\n        \"matchType\": \"EXACT\",\n        \"latestDetail\": {\n            \"id\": 1,\n            \"disableFlag\": null,\n            \"ids\": null,\n            \"rows\": 0,\n            \"page\": 0,\n            \"pageStart\": 0,\n            \"keywordId\": 1,\n            \"sbidLow\": 0.75,\n            \"sbidMedian\": 0.75,\n            \"sbidHigh\": 0.75,\n            \"keywordBid\": 0.75,\n            \"impression\": 2695,\n            \"spend\": 17.28,\n            \"cpc\": 0.6,\n            \"orders\": 1,\n            \"sales\": 34.98,\n            \"createTime\": 1541865600000,\n            \"acos\": 49.3997,\n            \"startTime\": null,\n            \"endTime\": null\n        },\n        \"detailList\": [\n            {\n                \"id\": 2002,\n                \"disableFlag\": null,\n                \"ids\": null,\n                \"rows\": 0,\n                \"page\": 0,\n                \"pageStart\": 0,\n                \"keywordId\": 1,\n                \"sbidLow\": 0.75,\n                \"sbidMedian\": 0.75,\n                \"sbidHigh\": 0.75,\n                \"keywordBid\": 0.75,\n                \"impression\": 2426,\n                \"spend\": 13.62,\n                \"cpc\": 0.62,\n                \"orders\": 2,\n                \"sales\": 69.96,\n                \"createTime\": 1541692800000,\n                \"acos\": 19.4683,\n                \"startTime\": null,\n                \"endTime\": null\n            },\n            {\n                \"id\": 1001,\n                \"disableFlag\": null,\n                \"ids\": null,\n                \"rows\": 0,\n                \"page\": 0,\n                \"pageStart\": 0,\n                \"keywordId\": 1,\n                \"sbidLow\": 0.75,\n                \"sbidMedian\": 0.75,\n                \"sbidHigh\": 0.75,\n                \"keywordBid\": 0.75,\n                \"impression\": 2695,\n                \"spend\": 17.28,\n                \"cpc\": 0.6,\n                \"orders\": 1,\n                \"sales\": 34.98,\n                \"createTime\": 1541779200000,\n                \"acos\": 49.3997,\n                \"startTime\": null,\n                \"endTime\": null\n            },\n            {\n                \"id\": 1,\n                \"disableFlag\": null,\n                \"ids\": null,\n                \"rows\": 0,\n                \"page\": 0,\n                \"pageStart\": 0,\n                \"keywordId\": 1,\n                \"sbidLow\": 0.75,\n                \"sbidMedian\": 0.75,\n                \"sbidHigh\": 0.75,\n                \"keywordBid\": 0.75,\n                \"impression\": 2695,\n                \"spend\": 17.28,\n                \"cpc\": 0.6,\n                \"orders\": 1,\n                \"sales\": 34.98,\n                \"createTime\": 1541865600000,\n                \"acos\": 49.3997,\n                \"startTime\": null,\n                \"endTime\": null\n            }\n        ],\n        \"rankList\": [],\n        \"startTime\": null,\n        \"endTime\": null\n    },\n    {\n        \"id\": 2,\n        \"disableFlag\": null,\n        \"ids\": null,\n        \"rows\": 0,\n        \"page\": 0,\n        \"pageStart\": 0,\n        \"name\": \"lunch box\",\n        \"volume\": 0,\n        \"groupId\": 1,\n        \"matchType\": \"BROAD\",\n        \"latestDetail\": {\n            \"id\": 2,\n            \"disableFlag\": null,\n            \"ids\": null,\n            \"rows\": 0,\n            \"page\": 0,\n            \"pageStart\": 0,\n            \"keywordId\": 2,\n            \"sbidLow\": 0.34,\n            \"sbidMedian\": 0.46,\n            \"sbidHigh\": 0.63,\n            \"keywordBid\": 0.55,\n            \"impression\": 2538,\n            \"spend\": 4.61,\n            \"cpc\": 0.42,\n            \"orders\": 0,\n            \"sales\": 0,\n            \"createTime\": 1541865600000,\n            \"acos\": 0,\n            \"startTime\": null,\n            \"endTime\": null\n        },\n        \"detailList\": [\n            {\n                \"id\": 2001,\n                \"disableFlag\": null,\n                \"ids\": null,\n                \"rows\": 0,\n                \"page\": 0,\n                \"pageStart\": 0,\n                \"keywordId\": 2,\n                \"sbidLow\": 0.34,\n                \"sbidMedian\": 0.46,\n                \"sbidHigh\": 0.63,\n                \"keywordBid\": 0.55,\n                \"impression\": 5959,\n                \"spend\": 3.11,\n                \"cpc\": 0.28,\n                \"orders\": 0,\n                \"sales\": 0,\n                \"createTime\": 1541692800000,\n                \"acos\": 0,\n                \"startTime\": null,\n                \"endTime\": null\n            },\n            {\n                \"id\": 1002,\n                \"disableFlag\": null,\n                \"ids\": null,\n                \"rows\": 0,\n                \"page\": 0,\n                \"pageStart\": 0,\n                \"keywordId\": 2,\n                \"sbidLow\": 0.34,\n                \"sbidMedian\": 0.46,\n                \"sbidHigh\": 0.63,\n                \"keywordBid\": 0.55,\n                \"impression\": 2538,\n                \"spend\": 4.61,\n                \"cpc\": 0.42,\n                \"orders\": 0,\n                \"sales\": 0,\n                \"createTime\": 1541779200000,\n                \"acos\": 0,\n                \"startTime\": null,\n                \"endTime\": null\n            },\n            {\n                \"id\": 2,\n                \"disableFlag\": null,\n                \"ids\": null,\n                \"rows\": 0,\n                \"page\": 0,\n                \"pageStart\": 0,\n                \"keywordId\": 2,\n                \"sbidLow\": 0.34,\n                \"sbidMedian\": 0.46,\n                \"sbidHigh\": 0.63,\n                \"keywordBid\": 0.55,\n                \"impression\": 2538,\n                \"spend\": 4.61,\n                \"cpc\": 0.42,\n                \"orders\": 0,\n                \"sales\": 0,\n                \"createTime\": 1541865600000,\n                \"acos\": 0,\n                \"startTime\": null,\n                \"endTime\": null\n            }\n        ],\n        \"rankList\": [\n            {\n                \"id\": 110,\n                \"disableFlag\": null,\n                \"ids\": null,\n                \"rows\": 0,\n                \"page\": 0,\n                \"pageStart\": 0,\n                \"keywordId\": 2,\n                \"keywordRank\": 101,\n                \"createTime\": 1541719080000,\n                \"startTime\": null,\n                \"endTime\": null\n            },\n            {\n                \"id\": 111,\n                \"disableFlag\": null,\n                \"ids\": null,\n                \"rows\": 0,\n                \"page\": 0,\n                \"pageStart\": 0,\n                \"keywordId\": 2,\n                \"keywordRank\": 104,\n                \"createTime\": 1541802060000,\n                \"startTime\": null,\n                \"endTime\": null\n            },\n            {\n                \"id\": 112,\n                \"disableFlag\": null,\n                \"ids\": null,\n                \"rows\": 0,\n                \"page\": 0,\n                \"pageStart\": 0,\n                \"keywordId\": 2,\n                \"keywordRank\": 102,\n                \"createTime\": 1541844060000,\n                \"startTime\": null,\n                \"endTime\": null\n            }\n        ],\n        \"startTime\": null,\n        \"endTime\": null\n    },\n    {\n        \"id\": 3,\n        \"disableFlag\": null,\n        \"ids\": null,\n        \"rows\": 0,\n        \"page\": 0,\n        \"pageStart\": 0,\n        \"name\": \"meal prep bag\",\n        \"volume\": 0,\n        \"groupId\": null,\n        \"matchType\": \"EXACT\",\n        \"latestDetail\": {\n            \"id\": 3,\n            \"disableFlag\": null,\n            \"ids\": null,\n            \"rows\": 0,\n            \"page\": 0,\n            \"pageStart\": 0,\n            \"keywordId\": 3,\n            \"sbidLow\": 0.66,\n            \"sbidMedian\": 0.8,\n            \"sbidHigh\": 1,\n            \"keywordBid\": 0.8,\n            \"impression\": 1896,\n            \"spend\": 4.28,\n            \"cpc\": 0.48,\n            \"orders\": 0,\n            \"sales\": 0,\n            \"createTime\": 1541865600000,\n            \"acos\": 0,\n            \"startTime\": null,\n            \"endTime\": null\n        },\n        \"detailList\": [\n            {\n                \"id\": 2004,\n                \"disableFlag\": null,\n                \"ids\": null,\n                \"rows\": 0,\n                \"page\": 0,\n                \"pageStart\": 0,\n                \"keywordId\": 3,\n                \"sbidLow\": 0.66,\n                \"sbidMedian\": 0.8,\n                \"sbidHigh\": 1,\n                \"keywordBid\": 0.8,\n                \"impression\": 1386,\n                \"spend\": 3.28,\n                \"cpc\": 0.66,\n                \"orders\": 0,\n                \"sales\": 0,\n                \"createTime\": 1541692800000,\n                \"acos\": 0,\n                \"startTime\": null,\n                \"endTime\": null\n            },\n            {\n                \"id\": 1003,\n                \"disableFlag\": null,\n                \"ids\": null,\n                \"rows\": 0,\n                \"page\": 0,\n                \"pageStart\": 0,\n                \"keywordId\": 3,\n                \"sbidLow\": 0.66,\n                \"sbidMedian\": 0.8,\n                \"sbidHigh\": 1,\n                \"keywordBid\": 0.8,\n                \"impression\": 1896,\n                \"spend\": 4.28,\n                \"cpc\": 0.48,\n                \"orders\": 0,\n                \"sales\": 0,\n                \"createTime\": 1541779200000,\n                \"acos\": 0,\n                \"startTime\": null,\n                \"endTime\": null\n            },\n            {\n                \"id\": 3,\n                \"disableFlag\": null,\n                \"ids\": null,\n                \"rows\": 0,\n                \"page\": 0,\n                \"pageStart\": 0,\n                \"keywordId\": 3,\n                \"sbidLow\": 0.66,\n                \"sbidMedian\": 0.8,\n                \"sbidHigh\": 1,\n                \"keywordBid\": 0.8,\n                \"impression\": 1896,\n                \"spend\": 4.28,\n                \"cpc\": 0.48,\n                \"orders\": 0,\n                \"sales\": 0,\n                \"createTime\": 1541865600000,\n                \"acos\": 0,\n                \"startTime\": null,\n                \"endTime\": null\n            }\n        ],\n        \"rankList\": [],\n        \"startTime\": null,\n        \"endTime\": null\n    },\n    {\n        \"id\": 4,\n        \"disableFlag\": null,\n        \"ids\": null,\n        \"rows\": 0,\n        \"page\": 0,\n        \"pageStart\": 0,\n        \"name\": \"lunch totes\",\n        \"volume\": 0,\n        \"groupId\": null,\n        \"matchType\": \"BROAD\",\n        \"latestDetail\": {\n            \"id\": 4,\n            \"disableFlag\": null,\n            \"ids\": null,\n            \"rows\": 0,\n            \"page\": 0,\n            \"pageStart\": 0,\n            \"keywordId\": 4,\n            \"sbidLow\": 0.38,\n            \"sbidMedian\": 0.46,\n            \"sbidHigh\": 0.68,\n            \"keywordBid\": 0.75,\n            \"impression\": 1077,\n            \"spend\": 2.48,\n            \"cpc\": 0.62,\n            \"orders\": 0,\n            \"sales\": 0,\n            \"createTime\": 1541865600000,\n            \"acos\": 0,\n            \"startTime\": null,\n            \"endTime\": null\n        },\n        \"detailList\": [\n            {\n                \"id\": 2005,\n                \"disableFlag\": null,\n                \"ids\": null,\n                \"rows\": 0,\n                \"page\": 0,\n                \"pageStart\": 0,\n                \"keywordId\": 4,\n                \"sbidLow\": 0.38,\n                \"sbidMedian\": 0.46,\n                \"sbidHigh\": 0.68,\n                \"keywordBid\": 0.75,\n                \"impression\": 1298,\n                \"spend\": 1.42,\n                \"cpc\": 0.47,\n                \"orders\": 0,\n                \"sales\": 0,\n                \"createTime\": 1541692800000,\n                \"acos\": 0,\n                \"startTime\": null,\n                \"endTime\": null\n            },\n            {\n                \"id\": 1004,\n                \"disableFlag\": null,\n                \"ids\": null,\n                \"rows\": 0,\n                \"page\": 0,\n                \"pageStart\": 0,\n                \"keywordId\": 4,\n                \"sbidLow\": 0.38,\n                \"sbidMedian\": 0.46,\n                \"sbidHigh\": 0.68,\n                \"keywordBid\": 0.75,\n                \"impression\": 1077,\n                \"spend\": 2.48,\n                \"cpc\": 0.62,\n                \"orders\": 0,\n                \"sales\": 0,\n                \"createTime\": 1541779200000,\n                \"acos\": 0,\n                \"startTime\": null,\n                \"endTime\": null\n            },\n            {\n                \"id\": 4,\n                \"disableFlag\": null,\n                \"ids\": null,\n                \"rows\": 0,\n                \"page\": 0,\n                \"pageStart\": 0,\n                \"keywordId\": 4,\n                \"sbidLow\": 0.38,\n                \"sbidMedian\": 0.46,\n                \"sbidHigh\": 0.68,\n                \"keywordBid\": 0.75,\n                \"impression\": 1077,\n                \"spend\": 2.48,\n                \"cpc\": 0.62,\n                \"orders\": 0,\n                \"sales\": 0,\n                \"createTime\": 1541865600000,\n                \"acos\": 0,\n                \"startTime\": null,\n                \"endTime\": null\n            }\n        ],\n        \"rankList\": [],\n        \"startTime\": null,\n        \"endTime\": null\n    }\n]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/com/amazon/keyword/controller/KeywordController.java",
    "groupTitle": "Keyword",
    "name": "GetKeywordMainNlictqueryalldatalistDo"
  },
  {
    "type": "get",
    "url": "/keyword/main/nlIctSetGroupMutiple.do",
    "title": "批量设置分组",
    "group": "Keyword",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "groupId",
            "description": "<p>分组id</p>"
          },
          {
            "group": "Parameter",
            "type": "int[]",
            "optional": false,
            "field": "keyword",
            "description": "<p>keyword的id数组</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Request:",
          "content": "{\n\tgroupId:1,\nkeywordArr:[1, 2]\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "{\n\t\"ok\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/com/amazon/keyword/controller/KeywordController.java",
    "groupTitle": "Keyword",
    "name": "GetKeywordMainNlictsetgroupmutipleDo"
  },
  {
    "type": "get",
    "url": "/keyword/main/nlIctUpdateVolume.do",
    "title": "更新数据源",
    "group": "Keyword",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\t\"ok\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/com/amazon/keyword/controller/KeywordController.java",
    "groupTitle": "Keyword",
    "name": "GetKeywordMainNlictupdatevolumeDo"
  },
  {
    "type": "get",
    "url": "/keyword/rank/nlIctInsertRank.do",
    "title": "更新排名数据源",
    "group": "KeywordRank",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\t\"ok\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/com/amazon/keyword/controller/KeywordRankController.java",
    "groupTitle": "KeywordRank",
    "name": "GetKeywordRankNlictinsertrankDo"
  }
] });
