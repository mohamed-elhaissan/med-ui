"use client"

import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

type InvoiceStatus = "Paid" | "Pending" | "Overdue"

const invoices: {
  id: string
  client: string
  status: InvoiceStatus
  amountCents: number
}[] = [
  { id: "INV-1042", client: "Northwind Studio", status: "Paid", amountCents: 125000 },
  { id: "INV-1043", client: "Lumen Labs", status: "Pending", amountCents: 48000 },
  { id: "INV-1044", client: "Harbor & Co.", status: "Paid", amountCents: 210050 },
  { id: "INV-1045", client: "Atlas Freight", status: "Overdue", amountCents: 89900 },
]

const statusVariant = {
  Paid: "secondary",
  Pending: "outline",
  Overdue: "destructive",
} as const satisfies Record<InvoiceStatus, string>

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
})

const formatCents = (cents: number) => currency.format(cents / 100)

export function TableDemo() {
  const total = invoices.reduce((sum, invoice) => sum + invoice.amountCents, 0)

  return (
    <div className="w-full max-w-xl">
      <Table>
        <TableCaption>Invoices issued in September.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-28">Invoice</TableHead>
            <TableHead>Client</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell className="font-medium">{invoice.id}</TableCell>
              <TableCell>{invoice.client}</TableCell>
              <TableCell>
                <Badge variant={statusVariant[invoice.status]}>
                  {invoice.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right tabular-nums">
                {formatCents(invoice.amountCents)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right tabular-nums">
              {formatCents(total)}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  )
}
