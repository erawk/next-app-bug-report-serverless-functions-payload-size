import { User } from '@prisma/client'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import prisma from '../../lib/database/prismaClient'

export const getStaticPaths: GetStaticPaths = async () => {
  const users = await prisma.user.findMany({ select: { id: true } })

  return {
    paths: users.map((user) => {
      return { params: { id: user.id.toString() } }
    }),
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext,
) => {
  const id = (context.params as { id: string }).id
  const user = await prisma.user.findFirst({ where: { id: parseInt(id, 10) } })

  return {
    props: {
      id,
      user,
    },
  }
}

function UserPage({ id, user }: { id: string; user: User }) {
  return (
    <>
      <h1>The user id we are looking for is {id}.</h1>
      <p>And the user details are:</p>
      <pre>{JSON.stringify(user)}</pre>
    </>
  )
}

export default UserPage
