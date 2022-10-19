import { createStitches, css } from "@stitches/react"
import { sky } from '@radix-ui/colors';

export const appTheme = createStitches({
    theme: {
        colors: {
            ...sky,

            basesky: '$sky6',
            headersky: '$sky11',
        }
    }
})

export const body = css({
    backgroundColor: '$basesky' ,
    color: '$header',
    margin: 0,
    padding: 0,
    height: '100vh',
    width: '100%',
})

export const header = css({
    backgroundColor: '$headersky',
    color: 'bg',

    margin: 0,
    padding: 0,

    position: 'fixed',
    top: 0,
    left: 0,

    width: '100%',
    height: 100,

    display: "flex",
    alignItems: 'center',
    justifyContent: 'space-around',
})