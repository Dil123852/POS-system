"use client"

import * as React from "react"
import { useFormContext, FormProvider } from "react-hook-form"
import { cn } from "../../lib/utils"

export function Form({ children, ...props }) {
  return <form {...props}>{children}</form>
}

export function FormField({ name, render }) {
  const { control } = useFormContext()
  return render({ field: { name, control } })
}

export function FormItem({ children }) {
  return <div>{children}</div>
}

export function FormLabel({ children }) {
  return <label>{children}</label>
}

export function FormControl({ children }) {
  return children
}

export function FormDescription({ children }) {
  return <p>{children}</p>
}

export function FormMessage({ children }) {
  return <p className="text-red-500 text-sm">{children}</p>
}
"use client"

import * as React from "react"
import { useFormContext, FormProvider } from "react-hook-form"

export function Form({ children, ...props }) {
  return <form {...props}>{children}</form>
}

export function FormField({ name, render }) {
  const { control } = useFormContext()
  return render({ field: { name, control } })
}

export function FormItem({ children }) {
  return <div>{children}</div>
}

export function FormLabel({ children }) {
  return <label>{children}</label>
}

export function FormControl({ children }) {
  return children
}

export function FormDescription({ children }) {
  return <p>{children}</p>
}

export function FormMessage({ children }) {
  return <p className="text-red-500 text-sm">{children}</p>
}
