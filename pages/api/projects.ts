import { projects } from "../../data/projects";
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req:NextApiRequest, res:NextApiResponse) {

  if(req.method !== "GET") res.status(404).send({message: "Not Allowed"})

  res.status(200).json({ data: projects })
}
