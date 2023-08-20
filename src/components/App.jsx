// import { Component } from "react"
import React, { useState } from 'react'
import { Sections } from "./Section/Section"
import { Feedbacks } from "./Feedbacks/Feedbacks"
import { Stats } from "./Stats/Stats"
import { Notifications } from "./Notifications/Notifications"

export const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const onLeaveFeedback = ({ target }) => {
    switch (target.name) {
      case 'good': setGood(prev => prev + 1)
      break

      case 'neutral': setNeutral(prev => prev + 1)
      break

      case 'bad': setBad(prev => prev + 1)
      break

      default: console.log('Ooopsy, we`ve got a problem :0');
      break
    }
  }
  const countTotalFeedback = () => {
    return good + neutral + bad
  }
  const countPositiveFeedbackPrc = () => {
    const rez = Math.round((100 / countTotalFeedback()) * good)

    if (Number.isNaN(rez)) {
      return 0;
    }
    return rez;
}

    return ( <>
      <Sections title='Please leave feedback'>
        <Feedbacks onLeaveFeedback={onLeaveFeedback} buttons={{ good, neutral, bad}} />
      </Sections>
      <Sections title='Statistics' >
       {countTotalFeedback()
            ? (<Stats {...{ good, neutral, bad}} total={countTotalFeedback} positivePercentage={countPositiveFeedbackPrc} />)
            : (<Notifications message="There is no feedback"></Notifications>)}
      </Sections>
    </>)
  }
