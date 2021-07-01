import React, { Component } from 'react'
import { MdTitle } from "react-icons/md"
import { GiNinjaHeroicStance, 
         GiElfHelmet,
         GiSpikedShoulderArmor,
         GiGauntlet,
         GiLeatherArmor,
         GiBeltBuckles,
         GiArmoredPants,
         GiSteeltoeBoots,
         GiBracer,
         GiNecklace,
         GiDoorRingHandle,
         GiGlobeRing,
         GiSwitchWeapon,
         GiBorderedShield,
         GiFireGem,
         GiCompanionCube,
         GiSkills,
         GiStabbedNote } from "react-icons/gi"

export default class Form extends Component {
  render() {
    return (
      <div>
    <form>
      <MdTitle id='icon'/>
      <input id='formInput' className="form-control" rows='10' placeholder='Title of Your Build' name='title'/>
      <GiNinjaHeroicStance id='icon'/>
      <input id='formInput' className="form-control"  placeholder='Character Class EX: Demon Hunter..Necromancer...' name='characterKlass'  />
      <br />

      <GiElfHelmet id='icon'/>
      <input id='formInput' className="form-control"  placeholder='Helm' name='helm'  />
      <GiSpikedShoulderArmor id='icon'/>
      <input id='formInput' className="form-control"  placeholder='Shoulders' name='shoulders'  />
      <GiGauntlet id='icon'/>
      <input id='formInput' className="form-control"  placeholder='Gloves' name='gloves'  />
      <br />

      
      <GiLeatherArmor id='icon'/>
      <input id='formInput' className="form-control"  placeholder='Chest Armor' name='chestArmor'  />
      <GiBeltBuckles id='icon'/>
      <input id='formInput' className="form-control"  placeholder='Belt' name='belt'  />
      <GiArmoredPants id='icon'/>
      <input id='formInput' className="form-control"  placeholder='Pants' name='pants'  />
      <br />


      <GiSteeltoeBoots id='icon'/>
      <input id='formInput' className="form-control"  placeholder='Boots' name='boots'  />
      <GiBracer id='icon'/>
      <input id='formInput' className="form-control"  placeholder='Bracers' name='bracers'  />
      <GiNecklace id='icon'/>
      <input id='formInput' className="form-control"  placeholder='Amulet' name='amulet'  />
      <br />

      
      <GiDoorRingHandle id='icon'/>
      <input id='formInput' className="form-control"  placeholder='Ring 1' name='ring1'  />
      <GiGlobeRing id='icon'/>
      <input id='formInput' className="form-control"  placeholder='Ring 2' name='ring2'  />
      <GiSwitchWeapon id='icon'/>
      <input id='formInput' className="form-control"  placeholder='Weapon' name='weapon'  />
      <br />


      <GiBorderedShield id='icon'/>
      <input id='formInput' className="form-control"  placeholder='Offhand' name='offhand'  />
      <GiFireGem id='icon'/>
      <textarea id='formInput' rows='10' className="form-control"  placeholder='Gems EX: Legendaries and Common Gems to Socket' name='gemNotes'  />
      <GiCompanionCube id='icon'/>
      <textarea id='formInput' className="form-control"  placeholder="Kanai's Cube What Legendary Powers to Extract" name='kanaisCube'  />
      <br />

      
      <GiSkills id='icon'/>
      <textarea id='formInput' className="form-control"  placeholder='Active Skills' name='activeSkills'  />
      <GiSkills id='icon'/>
      <textarea id='formInput' className="form-control"  placeholder='Passive Skills' name='passiveSkills' />
      <GiStabbedNote id='icon'/>
      <textarea id='formInput' className="form-control"  placeholder='Random Build Notes' name='generalBuildNotes'  />
      <br />

     
      <br />
      <input className="btn btn-outline-warning" type='submit'/>
    </form>
    </div>
    )
  }
}
