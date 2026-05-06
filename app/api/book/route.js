import { NextResponse } from 'next/server'
import connectToDb from '../../../lib/mongodb'

export async function POST(req){
  const body = await req.json()
  try{
    const db = await connectToDb()
    const doc = {
      name: body.name,
      phone: body.phone,
      message: body.msg || '',
      paid: body.paid || false,
      payment: body.payment || null,
      createdAt: new Date()
    }
    await db.collection('bookings').insertOne(doc)
    return NextResponse.json({ok:true})
  }catch(err){
    console.error(err)
    return NextResponse.json({ok:false}, {status:500})
  }
}
