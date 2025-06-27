export function formatPhone(phone: string): string {
  return phone.replace(/[^0-9]/g, '')
}

cd apps/admin 
npx create-next-app@latest . 