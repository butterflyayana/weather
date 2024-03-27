import cls from './sidebar.module.css'
import icon from '../../assets/icon.svg'
import wt from '../../assets/wt.svg'
import ex from '../../assets/ex.svg'
import ci from '../../assets/ci.svg'
import se from '../../assets/se.svg'

const Sidebar = () => {
  return (
    <div className={cls.sidebar}>
      <div>
         <img src={icon} alt="" />
      </div>
      <div className={cls.menu}>
          <img className={cls.icmenu} src={wt} alt="" />
          <img className={cls.icmenu} src={ex} alt="" />
          <img className={cls.icmenu} src={ci} alt="" />
          <img className={cls.icmenu} src={se} alt="" />
      </div>
    </div>
  )
}

export default Sidebar