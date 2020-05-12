import { rem } from "polished"

const breakpoints = {
  xxs:   360,
  xs:    480,
  s:     600,
  sm:    768,
  md:    992,
  mdl:   1024,
  lg:    1280,
  xl:    1440,
  xxl:   1920,
  xxxl:  2400
}

let breakPoints = {}

Object.entries(breakpoints).forEach(([key, val]) => {
  breakPoints[`${key}`] = `(max-width: ${rem(val)})`
  breakPoints[`${key}Up`] = `(min-width: ${rem(val+1)})`
})

export default breakPoints