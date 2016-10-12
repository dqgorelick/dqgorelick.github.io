
/************************************
SEMANTRIA CODE
*************************************/

var test = "I am happy to join with you today in what will go down in history as the greatest demonstration for freedom in the history of our nation. Five score years ago, a great American, in whose symbolic shadow we stand today, signed the Emancipation Proclamation. This momentous decree came as a great beacon light of hope to millions of Negro slaves who had been seared in the flames of withering injustice. It came as a joyous daybreak to end the long night of their captivity."
;(function (){

  var consumerKey = "570d49f2-d717-4dd8-ad1f-ed64d98697f3";
  var consumerSecret = "4ec66d89-40a6-4ebd-965f-669d6a8a3e4c";
  var score = "";
  function log(message) {
    $("#speech_rating").append(message + "<br/>");
  }
  
  function getInitialText() {
    var result = [];
    //final text from the recording added here
    result.push(final_transcript);
    //result.push(test)
    return result;
  }

  function processResponse(analyticData) {
    $("#speech_rating").html("");
    for(var i=0, data;data=analyticData[i];i++) {
      // Printing of document sentiment score
      log(SemantriaActiveSession.tpl("Sentiment score: {sentiment_score}", data));
      // Printing of document themes
      log("<div>Document themes:");
      if (data.themes) {
        for(var j=0, theme; theme=data.themes[j]; j++) {
          log(SemantriaActiveSession.tpl("<div style='margin-left: 30px;'/>{title} (sentiment: {sentiment_score})", theme));
        }
      } else {
        log("<div>");
      }

      // Printing of document entities
      log("<div>Entities:");
      if (data['entities']) {
        for(var j=0, entity; entity=data['entities'][j]; j++) {
          log(SemantriaActiveSession.tpl(
            "<div style='margin-left: 30px;'/>{title} : {entity_type} (sentiment: {sentiment_score})", entity
          ));
        }
      } else {
        log("<div>");
      }
      
      // Printing of document entities
      log("<div> Topics:");
      if (data.topics) {
        for(var j=0, topic; topic=data.topics[j]; j++) {
          log(SemantriaActiveSession.tpl(
            "<div> {title} : {type} (strength: {sentiment_score})", topic
          ));
        }
      } else {
        log("<div>");
      }
    }
}
    function receiveResponse(entitiesCount) {
      // As Semantria isn't real-time solution you need to wait some time before getting of the processed results
      // Wait ten seconds while Semantria process queued document

      var analyticData = [];
      var timeout = setInterval(function() {
        log("Retrieving your processed results...");
        // Requests processed results from Semantria service
        var processedDocuments = SemantriaActiveSession.getProcessedDocuments();

        if (processedDocuments && processedDocuments.length) {
          analyticData = analyticData.concat(processedDocuments);
        }

        if(analyticData.length == entitiesCount) {
          clearInterval(timeout);
          processResponse(analyticData);
        } 
      }, 2000);
    }

    window.runTestApp = function(string){
      //var initialTexts = getInitialText();
      initialTexts = [];
      initialTexts.push(string);
      
      // session is a global object
      SemantriaActiveSession = new Semantria.Session(consumerKey, consumerSecret, "MakeBU");
      SemantriaActiveSession.override({
        onError: function() {
          console.warn("onError:");
          console.warn(arguments);
        },

        onRequest: function() {
        },

        onResponse: function() {
        
        },

        onAfterResponse: function() {
        
        }
      });
      
        for(var i=0,text; text=initialTexts[i]; i++) {
          // Creates a sample document which need to be processed on Semantria
          var id = Math.floor(Math.random() * 10000000);
          // Queues document for processing on Semantria service
          var status = SemantriaActiveSession.queueDocument({
            id: id,
            text: text
          });
            
          // Check status from Semantria service
          if (status == 202) {
            log("Document# " + id + " queued successfully");
          }
        }

        receiveResponse(initialTexts.length);
      }
})();
