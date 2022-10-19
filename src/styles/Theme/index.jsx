import { createStitches, css, globalCss } from "@stitches/react"
import { sky, red } from '@radix-ui/colors';


export const globalStyles = globalCss({
    '*': {fontFamily: 'Poppins'}
})

export const appTheme = createStitches({
    theme: {
        colors: {
            ...sky,
            ...red,

            basesky: '$sky2',
            headersky: '$sky10',

            lctext: '$sky11',
            hctext: '$sky12',
            exit: '$red11',

            hbutton: '$sky3',
            hbuttonHovered: '$sky4',
            hbuttonSelected: '$sky5',

        },
        space: {
            1: '5px',
            2: '10px',
            3: '15px',
            4: '20px',
            5: '25px',
            6: '30px',
            7: '35px',
        },
        sizes: {
            1: '5px',
            2: '10px',
            3: '15px',
            4: '20px',
            5: '25px',
            6: '30px',
            7: '35px',
        },
        radii: {
            small: '5px',
            medium: '15px',
            round: '99999px'
        },
        fontSizes: {
            1: '13px',
            2: '15px',
            3: '20px',
            4: '24px',
            5: '32px',
            6: '36px',
            7: '40px',
            8: '48px'
        },
    }
});

export const body = css({
    backgroundColor: '$basesky' ,
    color: '$header',
    height: '100vh',
    width: '100%',
})

export const header = css({
    backgroundColor: '$headersky',
    color: 'bg',

    position: 'fixed',
    top: 0,
    left: 0,

    width: '100%',
    height: 100,

    display: "flex",
    alignItems: 'center',
    justifyContent: 'space-around',
})

export const headerIcons = css({
    maxWidth: '$3',
    fill: '$lctext',
    paddingRight: '$1',
})

export const headerButtons = css({
    display: 'inline-flex',
    alignItems: 'center',

    textDecoration: 'none',
    border: 'none',
    borderRadius: '$medium',

    padding: '$2',
    margin: '$2',

    backgroundColor: '$hbutton',
    color: '$lctext',
    fontWeight: '600',

    fontSize: '$2',
    
    '&:hover': {
        backgroundColor: '$hbuttonHovered',
    },
    '&:focus': {
        border: 'none',
        backgroundColor: '$hbuttonSelected',
    }
})

export const dropDownContent = css({
    backgroundColor: '$hbutton',
    boxShadow:'0px 10px 38px rgba(22, 23, 24, 0.468)',
    padding: '$2 $1',
    borderRadius: '$medium',
})

export const dropDownItems = css({
    variants: {
        color: {
            exit: { color: '$exit', },
            default: { color: '$lctext', },
        },
    },
    padding: '$1',
    '&:hover': {
        backgroundColor: '$hbuttonHovered',
    },

    defaultVariants: {
        color: 'default',
    },
})

export const dropDownSep = css ({
    height: 1,
    backgroundColor: '$lctext',
    margin: '$1',
    borderRadius: '$round',
})

export const hidden = css({
    display: 'none',
})


