import { parseISO, formatDistanceToNow } from 'date-fns';
import faIR from 'date-fns/locale/fa-IR';

const TimeAgo = ({ timestamp }) => {
  let timeAgo = ''
  if (timestamp) {
    const date = parseISO(timestamp)
    const timePeriod = formatDistanceToNow(date, { locale: faIR })
    timeAgo = `${timePeriod} پیش `
  }

  return (
    <span title={timestamp}>
      &nbsp; <i>{timeAgo}</i>
    </span>
  )
}
export default TimeAgo
