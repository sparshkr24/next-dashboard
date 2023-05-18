// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    const info_object = [
        {heading: "Total Revenue", value: "$2,156,870", color: "bg-emerald-100", image: "/revenue.svg"},
        {heading: "Total Transactions", value: "156,870", color: "bg-orange-100", image: "/transaction_card.svg"},
        {heading: "Total Likes", value: "856,870", color: "bg-red-100", image: "/likes.svg"},
        {heading: "Total Users", value: "56,870", color: "bg-violet-100", image: "/user_card.svg"},
      ]
    res.status(200).json(info_object)
  }
  