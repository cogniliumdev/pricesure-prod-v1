import Link from 'next/link'

export default function Products() {
  return (
    <div style={{padding:"20px"}}>
      <Link href={"/products/A1-Smart-Watch"} passHref>A1 Smart Watch</Link>
      <br/>
      <Link href={"/products/A4-Paper"} passHref>A4 Paper</Link>
      <br/>
      <Link href={"/products/A4tech-Bloody"} passHref>A4tech Bloody</Link>
    </div>
  )
}