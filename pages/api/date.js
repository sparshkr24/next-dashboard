// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const date_object = [
    { value: "May - June 2023", label: "May-June 2023" },
    { value: "June - July 2023", label: "June-July 2023" },
    { value: "July - Aug 2023", label: "July-Aug 2023" },
  ];
  res.status(200).json(date_object)
}
