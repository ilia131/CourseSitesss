import { useState } from 'react';

const useTooltip = () => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const showTooltip = () => setIsTooltipVisible(true);
  const hideTooltip = () => setIsTooltipVisible(false);

  return { isTooltipVisible, showTooltip, hideTooltip };
};

export default useTooltip;