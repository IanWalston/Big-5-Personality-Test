const answers = [];

//get the test
$.get("/test.json", function(data) {
  const question_list = data.questions;
  const display = $("#display");
  const row = $("<div>").addClass("row rounded");

  //some style for display
  display
    .addClass("rounded border p-4 m-2")
    .css("background-color", "lightgrey");

  //rend the word questions in the DOM
  row.append(
    $("<h1>")
      .addClass("col-md-5")
      .append("Questions")
  );

  //render labels for radio buttons at top of large screen DOM
  [
    "Strongly Disagree",
    "Disagree",
    "Neutral",
    "Agree",
    "Strongly Agree"
  ].forEach(item => {
    row.append(
      $("<label>")
        .addClass("col-md-1 radio-inline hidesmall")
        .html(item)
    );
  });

  display.append(row);
  display.append("<hr>");

  //render each question row in the DOM
  let i = 1;
  question_list.forEach(question => {
    const num = question.questionNumber;
    const rev = question.reversed;
    const row = $("<form>").addClass("row rounded");

    //add question to row
    row.append(
      $("<h4>")
        .addClass("col-md-5")
        .append(
          "I " +
            JSON.stringify(question.question)
              .replace(/"/g, "")
              .toLowerCase()
        )
    );

    //add radios to row
    row.append(
      //append radio 1
      $("<label>")
        .addClass("col-md-1 radio-inline rounded")
        .append(
          $("<input>")
            .attr("type", "radio")
            .attr("name", "optradio")
            .attr("onclick", `(${rev})?answers[${num}] = 5:answers[${num}] = 1`)
        )
        .append(
          $("<div>")
            .html("Strongly Disagree")
            .addClass("showsmall")
        )
    );
    row.append(
      //append radio 2
      $("<label>")
        .addClass("col-md-1 radio-inline rounded")
        .append(
          $("<input>")
            .attr("type", "radio")
            .attr("name", "optradio")
            .attr("onclick", `(${rev})?answers[${num}] = 4:answers[${num}] = 2`)
        )
        .append(
          $("<div>")
            .html("Disagree")
            .addClass("showsmall")
        )
    );
    row.append(
      //append radio 3
      $("<label>")
        .addClass("col-md-1 radio-inline rounded")
        .append(
          $("<input>")
            .attr("type", "radio")
            .attr("name", "optradio")
            .attr("onclick", `(${rev})?answers[${num}] = 3:answers[${num}] = 3`)
            .attr("checked", "checked")
        )
        .append(
          $("<div>")
            .html("Neutral")
            .addClass("showsmall")
        )
    );
    row.append(
      //append radio 4
      $("<label>")
        .addClass("col-md-1 radio-inline rounded")
        .append(
          $("<input>")
            .attr("type", "radio")
            .attr("name", "optradio")
            .attr("onclick", `(${rev})?answers[${num}] = 2:answers[${num}] = 4`)
        )
        .append(
          $("<div>")
            .html("Agree")
            .addClass("showsmall")
        )
    );
    row.append(
      //append radio 5
      $("<label>")
        .addClass("col-md-1 radio-inline rounded")
        .append(
          $("<input>")
            .attr("type", "radio")
            .attr("name", "optradio")
            .attr("onclick", `(${rev})?answers[${num}] = 1:answers[${num}] = 5`)
        )
        .append(
          $("<div>")
            .html("Strongly Agree")
            .addClass("showsmall")
        )
    );

    //add for to DOM at #display
    display.append(row);
    display.append($("<hr>"));

    //setting default answer to neutral in the answer object
    answers[num.slice(0, -1)] = 3;

    if (i % 6 == 0) {
      const row = $("<div>");
      //rend the word questions in the DOM
      row.append(
        $("<h1>")
          .addClass("col-md-5 hidesmall")
          .append("Questions")
      );

      //render labels for radio buttons at top of large screen DOM
      [
        "Strongly Disagree",
        "Disagree",
        "Neutral",
        "Agree",
        "Strongly Agree"
      ].forEach(item => {
        row.append(
          $("<label>")
            .addClass("col-md-1 radio-inline hidesmall")
            .html(item)
        );
      });
      row.addClass("row rounded")
      display.append(row)
    }
    i++;
  });

  //append submit button to bottom of DOM
  display.append(
    $("<div>")
      .addClass("row")
      .append($("<div>").addClass("col-md-8"))
      .append(
        $("<button>")
          .html("Submit Test")
          .addClass("col-md-4 mb-5 btn btn-primary")
          .on("click", () => {
            //turn the answers object into a string, then make a request to the server to score our test
            score_string = answers.join(",").slice(1, -2);
            console.log(score_string);

            $.get("/score/" + score_string, function(data) {
              display.empty();
              console.log(data);

              //canvasjs paint chart of 5 Factor score
              const chart = new CanvasJS.Chart("chartdisplay", {
                animationEnabled: true,

                title: {
                  text: "Your 5 Factor Personality Score"
                },
                axisX: {
                  interval: 1
                },
                axisY2: {
                  interlacedColor: "rgba(1,77,101,.2)",
                  gridColor: "rgba(1,77,101,.1)",
                  title: "Score"
                },
                data: [
                  {
                    type: "bar",
                    name: "score",
                    axisYType: "secondary",
                    color: "#014D65",
                    dataPoints: [
                      { y: data.Extraversion, label: "Extraversion" },
                      { y: data.Agreeableness, label: "Agreeableness" },
                      { y: data.Conscientiousness, label: "Conscientiousness" },
                      {
                        y: data.Emotional_Stability,
                        label: "Emotional Stability"
                      },
                      { y: data.Intellect, label: "Intellect" }
                    ]
                  }
                ]
              });
              chart.render();
              $(".canvasjs-chart-credit")
                .css("z-index", "-1")
                .css("opacity", "0");
              display.append(
                $("<div>")
                  .html("animal match information will go here")
                  .css("margin-top", "400px")
              );
            });
          })
      )
  );
});
