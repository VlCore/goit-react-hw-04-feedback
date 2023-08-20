import { Component } from "react"
import { Sections } from "./Section/Section"
import { Feedbacks } from "./Feedbacks/Feedbacks"
import { Stats } from "./Stats/Stats"
import { Notifications } from "./Notifications/Notifications"

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }
  
  onLeaveFeedback = ({ target }) => {
    this.setState((preState) => ({[target.name]:preState[target.name]+1}))
  }
  countTotalFeedback = () => {
    const {good, neutral, bad,}=this.state
    return good + neutral + bad
  }
  countPositiveFeedbackPercentage = () => {
    const rez = Math.round(100 / this.countTotalFeedback() * this.state.good)
    if (Number.isNaN(rez)) {
      return 0;
    }
    return rez;
}

  render() {
    return <>
      <Sections title='Please leave feedback'>
        <Feedbacks onLeaveFeedback={this.onLeaveFeedback} buttons={this.state} />
      </Sections>
      <Sections title='Statistics' >
       { this.countTotalFeedback()
            ? <Stats {...this.state} total={this.countTotalFeedback} positivePercentage={this.countPositiveFeedbackPercentage} />
            : <Notifications message="There is no feedback"></Notifications>}
        
      </Sections>
    </>
  }
}