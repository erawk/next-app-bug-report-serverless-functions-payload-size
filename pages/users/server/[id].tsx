import { User } from '@prisma/client'
import { GetServerSidePropsContext } from 'next'
import prisma from '../../../lib/database/prismaClient'

export async function getServerSideProps(context: GetServerSidePropsContext) {
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
      <h1>`getServerSideProps` - The user id we are looking for is {id}.</h1>
      <p>And the user details are:</p>
      <pre>{JSON.stringify(user)}</pre>
    </>
  )
}

export default UserPage
