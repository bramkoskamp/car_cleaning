import { supabase } from './supabaseClient';

export type Review = {
  id: string;
  name: string;
  rating: number;
  text: string;
  created_at: string;
  approved: boolean;
};

export async function fetchReviews(): Promise<Review[]> {
  const { data, error } = await supabase
    .from('reviews')
    .select('id, name, rating, text, created_at, approved')
    .eq('approved', true)
    .order('created_at', { ascending: false })
    .limit(12);
  if (error) throw error;
  return data ?? [];
}

export async function insertReview(input: { name: string; rating: number; text: string }): Promise<void> {
  const { error } = await supabase.from('reviews').insert({
    name: input.name,
    rating: input.rating,
    text: input.text,
  });
  if (error) throw error;
}

export async function insertContactMessage(input: {
  name: string;
  email: string;
  service: string;
  message: string;
}): Promise<void> {
  const { error } = await supabase.from('contact_messages').insert({
    name: input.name,
    email: input.email,
    service: input.service,
    message: input.message,
  });
  if (error) throw error;
}
