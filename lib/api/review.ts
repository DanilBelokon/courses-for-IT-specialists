import {IReviewSentResponse} from "@/components/ReviewForm/ReviewForm.interface";
import {API} from "../api";

export default async function postReview(data: {
  name: string;
  title: string;
  description: string;
  rating: number;
  productId: string;
}): Promise<IReviewSentResponse> {
  const res = await fetch(API.review.createDemo, {
    method: "POST",
    body: JSON.stringify(data),
    headers: new Headers({"content-type": "application/json"}),
  });
  return res.json();
}
