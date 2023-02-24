import { SalesChannel } from "@medusajs/medusa"

export const defaultChannelsSorter = (defaultSalesChannelId: string) => (
  sc1: SalesChannel,
  sc2: SalesChannel
) => {
  if (sc1.id === defaultSalesChannelId) {
    return -1
  }
  if (sc2.id === defaultSalesChannelId) {
    return 1
  }

  return sc1.name.localeCompare(sc2.name)
}
