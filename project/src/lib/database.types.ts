export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      brotherhood_updates: {
        Row: {
          id: string
          name: string
          content: string
          created_at: string
          approved: boolean
        }
        Insert: {
          id?: string
          name: string
          content: string
          created_at?: string
          approved?: boolean
        }
        Update: {
          id?: string
          name?: string
          content?: string
          created_at?: string
          approved?: boolean
        }
      }
    }
  }
}