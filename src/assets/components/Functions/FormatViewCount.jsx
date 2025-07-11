import React from 'react'

const FormatViewCount = ({view}) => {
    if (view >= 1_000_000) {
        const millionViews = view / 1_000_000;
        return `เล่น ${
          Number.isInteger(millionViews) ? millionViews : millionViews.toFixed(1)
        } ล้านครั้ง`;
      } else if (view >= 100_000) {
        const thousandViews = view / 100_000;
        return `เล่น ${
          Number.isInteger(thousandViews) ? thousandViews : thousandViews.toFixed(1)
        } แสนครั้ง`;
      } else if (view >= 10_000) {
        const thousandViews = view / 10_000;
        return `เล่น ${
          Number.isInteger(thousandViews) ? thousandViews : thousandViews.toFixed(1)
        } หมื่น ครั้ง`;
      } else if (view >= 1_000) {
        const thousandViews = view / 1_000;
        return `เล่น ${
          Number.isInteger(thousandViews) ? thousandViews : thousandViews.toFixed(1)
        } พัน ครั้ง`;
      }
      return `เล่น ${view} ครั้ง`;
}

export default FormatViewCount