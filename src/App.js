import React, { Component } from "react";
import FeedbackActions from "./Components/Feedback/Feedback";
import Statistics from "./Components/Statistics/Statistics";
import SectionTitle from "./Components/SectionTitle/SectionTitle";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleSaveFeedback = (name) => () => {
    this.setState((prevState) => {
      return { [name]: (prevState[name] += 1) };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;

    const countTotalFeedback = good + neutral + bad;

    const countPositiveFeedbackPercentage = Math.round(
      (good * 100) / (neutral + bad + good)
    );

    return (
      <>
        <SectionTitle title="Please leave feedback">
          <FeedbackActions
            options={Object.keys(this.state)}
            onSaveFeedback={this.handleSaveFeedback}
          />
        </SectionTitle>
        <SectionTitle title="Statistics">
          {countTotalFeedback > 0 ? (
            <>
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={countTotalFeedback}
                positiveFeedbackPercentage={countPositiveFeedbackPercentage}
              />
            </>
          ) : (
            <p>No feedback given</p>
          )}
        </SectionTitle>
      </>
    );
  }
}

export default App;
