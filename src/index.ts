import { z } from "zod";

type TBook = {
  title: string;
  price: number;
  description: string;
  author: string;
};

const book = z.object({
  title: z.string(),
  price: z.number(),
  description: z.string().optional().default("The Description"),
  author: z.string(),
});

type TBook2 = z.infer<typeof book>;

const result = book.safeParse({
  title: "ss",
  price: 10,
  author: "Abu Sayeed",
  extra: "This is extra data",
});

console.log(JSON.stringify(result, null, 2));
