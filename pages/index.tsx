import Home from 'components/home-page/home'
import { NextPage } from 'next'
import { BlogPostProps } from 'interfaces/interface'
import PageLayout from 'components/layouts/pageLayout'

const Index: NextPage<BlogPostProps> = (props) => {
  const { posts } = props
  return (
    <PageLayout title="Joey de Jonge - Student">
      <Home posts={posts} />
    </PageLayout>
  )
}



export default Index
