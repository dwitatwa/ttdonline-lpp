import s from "./index.module.css";
import Image from "next/image";
import LockIcon from "@material-ui/icons/Lock";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import Button from "@material-ui/core/Button";
import Head from "next/head";

export default function Home() {
  return (
    <div className={s.base}>
      <Head>
        <title>Tanda tangan Elektronik LPPNTB</title>
      </Head>
      <div className={s.container}>
        <div className={s.wrap}>
          <div className={s.logo}>E-Sign</div>
          <div className={s.menu}>
            <div className={s.active}>Beranda</div>
            <div>Kontak</div>
            <div>Tutorial</div>
          </div>
        </div>
        <div className={s.wrap_down}>
          <div className={s.left}>
            <div className={s.text}>
              <h1>Tanda tangan elektronik.</h1>
              <span>Electronic Signature</span>
            </div>
            <div className={s.login}>
              <LockIcon fontSize="small" /> &nbsp; Masuk
            </div>
          </div>
          <div className={s.right}>
            <Image src="/sign-logo.png" width="100" height="100" />
          </div>
        </div>
      </div>
      <div className={s.footer}>
        <div className={s.footer_container}>
          <div className={s.footer_left}>
            &copy; Copyright 2021, Lembaga Pengembangan Pendidikan NTB
          </div>
          <div className={s.footer_right}>
            <Button
              href="https://www.facebook.com/Beasiswa-NTB-506582289755226"
              target="_blank"
            >
              <FacebookIcon />
            </Button>
            <Button
              href="https://www.instagram.com/beasiswantb/"
              target="_blank"
            >
              <InstagramIcon />
            </Button>
            <Button
              href="https://www.youtube.com/channel/UCiwMtRu01J3BRjCgccNNXKg"
              target="_blank"
            >
              <YouTubeIcon />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
