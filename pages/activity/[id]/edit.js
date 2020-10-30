import React from 'react'
import Head from 'next/head'
import Router from 'next/router'
import Edit from '../../../components/edit'
import { getActivityById, updateActivity } from '../../../actions'

class EditActivity extends React.Component {

  static async getInitialProps({query}) {
    const activity = await getActivityById(query.id)
    return { activity }
  }

  HandleUpdateActivity = (activity) => {
    updateActivity(activity).then((updatedActivity) => {
      Router.push('/activity/[id]', `/activity/${activity.id}`)
    })
  }

  render() {
    const { activity } = this.props
    return (
      <>
        <Head>
          <title>DiscoverDoo - Edit activity</title>
          <meta name="title" content="DiscoverDoo fun finder" />
        </Head>
        <div className="container">
          <Edit 
          submitButton="Update"
          initialData={activity} 
          handleFormSubmit={this.HandleUpdateActivity} />
        </div>
      </>
    )
  }

}

export default EditActivity