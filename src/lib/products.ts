import { supabase } from './supabase'

// 以后根据你的实际表名和字段来改
export async function getProducts() {
  const { data, error } = await supabase
    .from('products')   // 改成你的表名
    .select('*')

  if (error) {
    console.error('Supabase error:', error)
    return []
  }

  return data ?? []
}

export async function getProductById(id: string) {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', id)
    .single()

  if (error) {
    console.error('Supabase error:', error)
    return null
  }

  return data
}
