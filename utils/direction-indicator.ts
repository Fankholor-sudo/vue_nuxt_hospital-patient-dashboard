import ArrowDownIcon from '~/assets/icons/arrow-down-icon.svg'
import ArrowUpIcon from '~/assets/icons/arrow-up-icon.svg'

export enum indicatorStatus {
  Higher = 'Higher than Average',
  Lower = 'Lower than Average',
  Normal = 'Normal'
}

export const getIndicator = (status: string | undefined) => {
  const mapping = {
    [indicatorStatus.Higher]: ArrowUpIcon,
    [indicatorStatus.Lower]: ArrowDownIcon,
    [indicatorStatus.Normal]: null
  }

  return mapping[status as indicatorStatus] ?? null
}