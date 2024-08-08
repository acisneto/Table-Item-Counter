import wixData from "wix-data";
$w.onReady(function () {

wixData
  .query("PRONTUARIOS")
  .find()
  .then((results) => {
    let resultCount = results.totalCount; 
	$w("#text9").text = "Total: " + resultCount
  });

});
