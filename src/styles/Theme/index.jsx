import { createStitches, css, globalCss } from "@stitches/react"
import { sky, red, blue } from '@radix-ui/colors';


export const globalStyles = globalCss({
    '*': {fontFamily: 'Poppins'}
})

export const appTheme = createStitches({
    theme: {
        colors: {
            ...sky,
            ...red,
            ...blue,

            basesky: '$sky2',
            headersky: '$blue10',

            lctext: '$sky11',
            hctext: '$sky12',
            exit: '$red11',

            hbutton: '$sky7',
            hbuttonHovered: '$sky8',
            hbuttonSelected: '$sky4',

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
    backgroundImage: `linear-gradient(45deg, ${'$sky5'} 0%, ${'$sky10'} 100%)`,
    color: '$header',
    height: '100vh',
    width: '100%',
    marginTop: 100,
    height: 'calc(100vh - 100px)',
})

export const header = css({
    backgroundColor: '$basesky',
    color: 'bg',

    position: 'fixed',
    top: 0,
    left: 0,

    width: '100%',
    height: 100,
    maxHeight: 100,

    display: "flex",
    alignItems: 'center',
    justifyContent: 'space-around',

    zIndex: 3,
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
    border: 'solid 1.5px $hbutton',
    borderRadius: '$medium',

    padding: '$2',
    margin: '$2',

    background: 'none',
    color: '$lctext',
    fontWeight: '600',

    fontSize: '$2',
    
    '&:hover': {
        borderColor: '$hbuttonHovered',
    },
    '&:focus': {      
        backgroundColor: '$hbuttonSelected',
    }
})

export const dropDownContent = css({
    backgroundColor: '$basesky',
    boxShadow:'0px 10px 38px rgba(22, 23, 24, 0.468)',
    padding: '$2 $1',
    borderRadius: '$medium',
    marginTop: '$1',

})

export const dropDownItems = css({
    variants: {
        color: {
            exit: { color: '$exit', },
            default: { color: '$lctext', },
        },
    },
    borderRadius: '$small',
    padding: '$1',
    '&:hover': {
        backgroundColor: '$sky4',
    },

    defaultVariants: {
        color: 'default',
    },
})

export const dropDownSep = css ({
    height: 1,
    backgroundColor: '$sky6',
    margin: '$1',
    borderRadius: '$round',
})

export const homePlane = css({
    position: 'absolute',
    right: 100,
    y: -20,
    zIndex: 0,
    userSelect: 'none',
})

export const homeContent = css ({
    display: 'flex',
    alignItems: 'center',

    position: 'absolute',
    zIndex: 2,

    width: '100%',
    height: 'calc(100vh - 100px)',

    overflow: 'hidden',
})

export const homeTitle = css({
    fontSize: '$8',
    maxWidth: 600,
    paddingLeft: 100,
    color: '$lctext',
})

export const hidden = css({
    display: 'none',
})
