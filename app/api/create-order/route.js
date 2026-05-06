import { NextResponse } from 'next/server'
import connectToDb from '../../../lib/mongodb'

export async function POST(req){
  const body = await req.json()
  const { amount, name, phone } = body

  const receipt = `rcpt_${Date.now()}`
  const payload = { amount, currency: 'INR', receipt, payment_capture: 1 }

  const auth = Buffer.from(`${process.env.RAZORPAY_KEY_ID}:${process.env.RAZORPAY_SECRET}`).toString('base64')
  const res = await fetch('https://api.razorpay.com/v1/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${auth}`
    },
    body: JSON.stringify(payload)
  })

  const order = await res.json()

  try{
    const db = await connectToDb()
    await db.collection('bookings').insertOne({name,phone,orderId:order.id,amount,paid:false,createdAt:new Date()})
  }catch(e){
    console.error('DB save failed', e)
  }

  return NextResponse.json({id: order.id, amount: order.amount})
}
