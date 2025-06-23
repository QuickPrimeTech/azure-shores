export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-sand-beige-light">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-ocean-blue border-t-transparent mb-4"></div>
        <div className="text-ocean-blue font-medium">Loading Azure Shores...</div>
      </div>
    </div>
  )
}
