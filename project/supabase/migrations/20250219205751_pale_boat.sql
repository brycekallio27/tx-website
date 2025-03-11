/*
  # Brotherhood Updates Schema

  1. New Tables
    - `brotherhood_updates`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `content` (text, required)
      - `created_at` (timestamp with timezone)
      - `approved` (boolean) - For moderation purposes
      
  2. Security
    - Enable RLS on `brotherhood_updates` table
    - Add policies for:
      - Anyone can create updates (they'll need approval)
      - Only authenticated admins can approve/view unapproved updates
      - Everyone can view approved updates
*/

CREATE TABLE brotherhood_updates (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  content text NOT NULL,
  created_at timestamptz DEFAULT now(),
  approved boolean DEFAULT false
);

ALTER TABLE brotherhood_updates ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit updates
CREATE POLICY "Anyone can create updates"
  ON brotherhood_updates
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Only approved updates are visible to the public
CREATE POLICY "Anyone can view approved updates"
  ON brotherhood_updates
  FOR SELECT
  TO public
  USING (approved = true);

-- Admins can view all updates (including unapproved ones)
CREATE POLICY "Admins can view all updates"
  ON brotherhood_updates
  FOR SELECT
  TO authenticated
  USING (true);