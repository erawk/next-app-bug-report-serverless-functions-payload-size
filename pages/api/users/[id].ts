import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/database/prismaClient'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { id }: { id: string } = req.body

  const userId = parseInt(id, 10)

  const user = await prisma.user.findFirst({ where: { id: userId } })

  res.json({ user })
}
