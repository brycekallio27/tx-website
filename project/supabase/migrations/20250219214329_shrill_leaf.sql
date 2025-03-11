/*
  # Create brotherhood updates table

  1. New Tables
    - `brotherhood_updates`
      - `id` (uuid, primary key)
      - `name` (text)
      - `content` (text)
      - `created_at` (timestamp)
      - `approved` (boolean)

  2. Security
    - Enable RLS on `brotherhood_updates` table
    - Add policies for:
      - Public submission of updates
      - Public viewing of approved updates only
      - Admin viewing of all updates
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