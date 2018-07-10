import Link from 'next/link'
const style = {
    margin:'10px 10px'
}
const header =  () => (
    <div>
        <Link href="/">
        <a>Home</a>
        </Link>
        <Link href="/about">
        <a style={style}>About</a>
        </Link>
    </div>
)

export default header