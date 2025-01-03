import { motion } from "motion/react";

const CharacterDescription = () => {
  return (
    <motion.div
      className="flex flex-col p-6 align-center justify-center text-start gap-6  bg-gray-950 border-2 border-gray-700 rounded-xl "
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
    >
      <div className="font-bold text-3xl font-custom">Description</div>
      <div className="text-start flex flex-col gap-4 text-xl">
        <p>
          Jon Snow, born Aegon Targaryen, is the son of Lyanna Stark and Rhaegar
          Targaryen, the late Prince of Dragonstone. To protect him from those
          seeking to destroy House Targaryen, Jon is presented as the
          illegitimate son of Lord Eddard Stark, Lyanna’s brother, and raised at
          Winterfell alongside Eddard’s legitimate children. His true parentage
          remains a closely guarded secret, even from Jon himself.
        </p>
        <p>
          As a young man, Jon joins the Night's Watch and eventually becomes
          Lord Commander. However, his leadership sparks controversy,
          particularly his decision to allow the wildlings to settle south of
          the Wall. These decisions lead to his murder in a mutiny, but he is
          brought back to life by the red priestess Melisandre.
        </p>
        <p>
          Freed from his vows to the Night's Watch after his resurrection, Jon
          teams up with his half-sister Sansa Stark to reclaim Winterfell from
          House Bolton, restoring House Stark's rule in the North. He is then
          proclaimed King in the North.
        </p>
        <p>
          When the threat of the White Walkers looms, Jon negotiates an alliance
          with Daenerys Targaryen. He pledges himself and his forces to her
          cause, falling in love with her in the process. Jon abdicates his
          title as King in the North and becomes Warden of the North under
          Daenerys.
        </p>
        <p>
          Later, Jon learns from Samwell Tarly that he is actually Aegon
          Targaryen, making Daenerys his aunt. As a dragonrider bonded with
          Rhaegal, Jon fights in the Battle of Winterfell, where the Night King
          is defeated and the Long Night is averted. Following the victory, Jon
          supports Daenerys in her campaign for the Iron Throne and takes part
          in the Battle of King's Landing
        </p>
        <p>
          However, when Daenerys destroys a surrendered King’s Landing, Jon
          realizes he cannot dissuade her from further devastation. To prevent
          more bloodshed, he reluctantly kills her.
        </p>
        <p>
          After Daenerys’ death, a Great Council convenes and decides Jon’s
          fate. He is exiled back to the Night's Watch. There, Jon leads the
          Free Folk to settle in the thawing lands beyond the Wall, embracing a
          life of freedom.
        </p>
      </div>
    </motion.div>
  );
};

export default CharacterDescription;
