/* Catálogo Distribuidora Horse, extraído do catálogo oficial do cliente.
   Imagens reais em assets/produtos/ (webp otimizado).
   tone: health (Saúde) · performance (Performance) · neutral (Nutrição/Higiene/Pesca): cor do badge. */
(function () {
  const slug = (s) => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/&/g, '').replace(/[()\/.]/g, ' ')
    .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

  const P = (marca, name, category, size, desc, img) => {
    const tone = category === 'Saúde' ? 'health' : category === 'Performance' ? 'performance' : 'neutral';
    return { marca, name, category, tone, size, desc, image: './assets/produtos/' + (img || slug(name)) + '.webp' };
  };

  window.HORSE_PRODUCTS = [
    // ---------------- SYNTEC ----------------
    P('Syntec', 'Creatina 90 Syntec', 'Performance', '2 kg', 'Suplemento à base de creatina monoidratada grau de pureza de 99%, alta qualidade e pronta para uso.'),
    P('Syntec', 'Fenilbutazona', 'Saúde', '100 ml', 'Anti-inflamatório não esteroide (AINE) com propriedades analgésica e antipirética.'),
    P('Syntec', 'Vitapulmin Gel', 'Saúde', '500 ml', 'Broncodilatador seletivo B2 à base de Clembuterol; melhora a condutância do ar.'),
    P('Syntec', 'Apromazin 1%', 'Saúde', '20 ml', 'Tranquilizante e pré-anestésico à base de Maleato de Acepromazina.', 'apromazin-1'),
    P('Syntec', 'Anestt', 'Saúde', '50 ml', 'Anestésico local injetável à base de Cloridrato de Lidocaína e Bitartarato de Epinefrina.'),
    P('Syntec', 'Maxitec Injetável', 'Saúde', '50 ml', 'Anti-inflamatório não esteroide à base de Meloxicam 3%.'),
    P('Syntec', 'Equi-Boost', 'Performance', '50 ml', 'Hormônio sintético à base de Undecilenato de Boldenona, auxílio no tratamento de cavalos debilitados.'),
    P('Syntec', 'Cetamin', 'Saúde', '50 ml', 'Anestésico geral dissociativo à base de Cloridrato de Cetamina.'),
    P('Syntec', 'Cikadol', 'Saúde', '50 g', 'Pomada à base de Benzilpenicilina, Diidroestreptomicina, Óleo de Citronela e Ureia.'),
    P('Syntec', 'Duofor', 'Higiene', '1 L a 5 L', 'Sanitizante para limpeza e higienização de instalações, equipamentos e veículos de transporte.'),
    P('Syntec', 'Detomidin', 'Saúde', '10 ml', 'Sedação e analgesia eficazes em equinos e bovinos, à base de detomidina.'),
    P('Syntec', 'Evigest', 'Saúde', '1 frasco 1 ml + seringa', 'Injetável inibidor de cio (estro) em cadelas e gatas, de fácil aplicação.'),
    P('Syntec', 'Xilazin', 'Saúde', '10 a 50 ml', 'Sedativo e analgésico à base de Cloridrato de Xilazina 2%.'),

    // ---------------- ORGANNACT ----------------
    P('Organnact', 'Calmyn Equi Turbo Líquido', 'Nutrição', '1 litro', 'Suplemento aminoácido vitamínico mineral, ideal para animais em períodos de estresse ou agitação.'),
    P('Organnact', 'Calmyn Equi', 'Nutrição', '34 ml', 'Nova apresentação do Calmyn Equi Turbo (líquido), com a mesma eficácia.'),
    P('Organnact', 'Enteroequi Pellets', 'Nutrição', 'Balde 3,6 kg', 'Suplemento mineral e aminoácido que auxilia no funcionamento intestinal e equilíbrio da microbiota.'),
    P('Organnact', 'Gastroequi', 'Nutrição', '34 ml', 'Suplemento vitamínico aminoácido com suporte para o adequado funcionamento gástrico.'),
    P('Organnact', 'Gastroequi Pellets', 'Nutrição', 'Balde 1 kg', 'Suplemento mineral vitamínico para equinos em qualquer fase da vida.'),
    P('Organnact', 'M.O. Ruminantes', 'Nutrição', '780 ml', 'Modificador orgânico para ruminantes, reforço nutricional e reposição de nutrientes.', 'm-o-ruminantes'),
    P('Organnact', 'MO Turbo', 'Nutrição', '56 ml', 'Suplemento vitamínico aminoácido para equinos em diversas fases da vida.'),
    P('Organnact', 'Lactobac', 'Nutrição', '35 g', 'Suplemento vitamínico mineral para bovinos, contendo probióticos e prebiótico.'),
    P('Organnact', 'LactoBac Equi', 'Nutrição', '66 ml', 'Suplemento vitamínico contendo probióticos e prebiótico para equinos.', 'lactobac-equi'),
    P('Organnact', 'Bovisacc', 'Nutrição', '1 kg e 15 kg', 'Suplemento vitamínico mineral para bovinos de leite; probiótico da microbiota ruminal.'),
    P('Organnact', 'Glicol Bovis Turbo', 'Nutrição', '500 ml e 5 L', 'Suplemento vitamínico aminoácido para bovinos, auxílio na nutrição diária.'),
    P('Organnact', 'Glicol Turbo', 'Nutrição', '1,5 L e 5 L', 'Suplemento vitamínico aminoácido para equinos, muares, asininos e avestruzes.'),
    P('Organnact', 'Promun Recém Nascido Equi', 'Nutrição', '78 ml', 'Suplemento vitamínico mineral aminoácido para equinos neonatos ou potros em fase de lactação.', 'promun-recem-nascido-equi'),
    P('Organnact', 'Promun Recém-Nascido', 'Nutrição', '30 ml', 'Suplemento vitamínico mineral para equinos neonatos ou potros lactentes.', 'promun-recem-nascido'),
    P('Organnact', 'Promun Equi', 'Nutrição', '500 g', 'Suplemento com probiótico e prebiótico, auxílio na manutenção do equilíbrio intestinal.'),
    P('Organnact', 'Sponge Equi', 'Nutrição', '78 ml', 'Suplemento aminoácido com prebiótico (MOS) e beta-glucanas para a microbiota intestinal.'),
    P('Organnact', 'Prata Mata Bicheira', 'Saúde', '500 ml', 'Indicado na profilaxia e tratamento de bicheiras (miíases) causadas por mosca.'),
    P('Organnact', 'Kit Pré-Prova (ATP / D-Nitrox / Turbo)', 'Performance', '115 g', 'Suplemento energético indicado para equinos atletas antes das provas.', 'kit-pre-prova-atp-d-nitrox-turbo'),
    P('Organnact', 'Pre-Aprova 3 em 1', 'Performance', '80 ml', 'Preparação essencial (ATP, Turbo e D-Nitrox) para o cavalo competir em boas condições.', 'pre-aprova-3-em-1'),
    P('Organnact', 'ATP', 'Performance', '78 ml', 'Suplemento energético para equinos atletas, aporte imediato de energia antes da prova.', 'atp'),
    P('Organnact', 'Turbo', 'Performance', '78 ml', 'Suplemento vitamínico aminoácido com arginina, taurina e creatina para equinos atletas.', 'turbo'),
    P('Organnact', 'D-Nitrox', 'Performance', '78 ml', 'Suplemento aminoácido com arginina e taurina, apoio ao desempenho em provas.', 'd-nitrox'),
    P('Organnact', 'D-Nitrox 25 Turbo', 'Performance', '1 kg', 'Glicose energética para manutenção das reservas energéticas do equino atleta.', 'd-nitrox-25-turbo'),
    P('Organnact', 'Casco & Pelo', 'Nutrição', '500 g', 'Suplemento vitamínico mineral aminoácido; manutenção das características de casco e pelo.', 'casco-pelo'),
    P('Organnact', 'Casco & Pelo Turbo', 'Nutrição', '1 L', 'Manutenção da qualidade de cascos, pelos, crina e cauda em qualquer fase da vida.', 'casco-pelo-turbo'),
    P('Organnact', 'Condrix Equi', 'Nutrição', '500 g', 'Suplemento mineral aminoácido indicado para equinos de todas as idades.'),
    P('Organnact', 'Creatina ATP', 'Performance', '2 kg', 'Suplemento aminoácido com creatina e ATP para o metabolismo energético de equinos atletas.'),
    P('Organnact', 'Creatina', 'Performance', '2 kg', 'Suplemento aminoácido para preparação de leilões e provas de morfologia.'),
    P('Organnact', 'Hemo Turbo', 'Nutrição', '1 L e 5 L', 'Alta concentração de ácido fólico, pode ser usado com antibióticos.'),
    P('Organnact', 'Eletro Equi Gel', 'Nutrição', '80 ml', 'Suplementação diária de eletrólitos para equinos em exercícios intensos ou transportados.'),
    P('Organnact', 'Eletro Equi Pó', 'Nutrição', '500 g', 'Suplemento mineral que repõe minerais e mantém o equilíbrio hidroeletrolítico.', 'eletro-equi-po'),
    P('Organnact', 'Muscle Horse', 'Performance', '2,5 / 6 / 15 kg', 'Ideal para início da fase atlética, doma e treinamento.'),
    P('Organnact', 'Muscle Horse Turbo', 'Performance', '2,5 / 6 / 15 kg', 'Manutenção da performance, da saúde de articulações e da massa muscular.', 'muscle-horse-turbo'),
    P('Organnact', 'Muscle Horse Turbo Box Pouch', 'Performance', '2,5 / 6 / 15 kg', 'Suplemento vitamínico aminoácido em embalagem pouch para praticidade no dia a dia.', 'muscle-horse-turbo-box-pouch'),
    P('Organnact', 'Fitoclean', 'Higiene', '250 ml', 'Solução higienizadora que promove limpeza profunda em equinos, caninos, felinos e bovinos.'),
    P('Organnact', 'Nutrifull Apetite Boost Equi', 'Nutrição', '34 ml', 'Suplemento vitamínico mineral aminoácido para manutenção da boa qualidade nutricional.', 'nutrifull-apetite-boost-equi'),
    P('Organnact', 'Nutrifull Equi', 'Nutrição', '500 ml e 3,6 L', 'Reforço aminoácido, vitamínico e mineral para manutenção da qualidade nutricional diária.'),
    P('Organnact', 'Relax Ice', 'Performance', '100 e 350 ml', 'Óleo para massagem com ação relaxante e hidratante; sensação de frescor à pele.'),
    P('Organnact', 'Relax Ice Gel', 'Performance', '1 kg', 'Gel para massagem para uso em equinos, caninos, felinos e bovinos.'),
    P('Organnact', 'Relax Ice - Barro', 'Performance', '1,2 e 6 kg', 'Pasta para descanso muscular após exercícios, relaxamento de músculos e tendões.', 'relax-ice-barro'),
    P('Organnact', 'Compplet Max', 'Nutrição', '2,5 / 6 / 15 kg', 'Suplemento vitamínico mineral aminoácido contendo probiótico, para todas as idades.'),
    P('Organnact', 'Disco Final', 'Performance', '60 ml', 'Suplemento com BCAA e L-carnitina para equinos atletas adultos.'),
    P('Organnact', 'Antiox EC Selênio', 'Performance', '500 g', 'Nutrientes antioxidantes (vitamina E, C e selênio) para cavalos em atividades físicas.', 'antiox-ec-selenio'),
    P('Organnact', 'BCAA', 'Performance', '60 g', 'Aminoácido indicado para equinos após esforço físico intenso.'),
    P('Organnact', 'Corpore Potros', 'Nutrição', '10 kg', 'Suplemento aminoácido proteico para potros em crescimento, conceito de proteína ideal.', 'corpore-potros'),
    P('Organnact', 'Corpore Potros Pellets', 'Nutrição', '3 e 10 kg', 'Versão em pellets do Corpore Potros, facilita o consumo e reduz desperdício.', 'corpore-potros-pellets'),
    P('Organnact', 'Corpore Potros Baby Sustag Pellets', 'Nutrição', '3 e 10 kg', 'Suplemento para potros na fase inicial, apoio ao crescimento estruturado.', 'corpore-potros-baby-sustag-pellets'),
    P('Organnact', 'Corpore Potros Box Pouch', 'Nutrição', '3 e 10 kg', 'Suplemento aminoácido proteico para equinos em crescimento em embalagem pouch.', 'corpore-potros-box-pouch'),
    P('Organnact', 'Orga Milk Potros', 'Nutrição', '10 kg', 'Proporção ideal de cálcio e fósforo para potros na fase de lactação, rende cerca de 100 litros.', 'orga-milk-potros'),
    P('Organnact', 'Ortho Potros', 'Nutrição', '500 ml e 5 L', 'Suplemento aminoácido para potros em crescimento; vitaminas e minerais diários.'),
    P('Organnact', 'Resistance', 'Performance', '4,5 kg', 'Colina precursora da vitamina B1, contribui para maior resistência e captação de glicose.', 'resistance'),
    P('Organnact', 'Laminact Turbo', 'Nutrição', '4,5 kg', 'Suplemento vitamínico mineral com elementos importantes para as características fisiológicas.'),
    P('Organnact', 'Mio Action', 'Performance', '1 kg', 'Suplemento proteico para equinos submetidos a treinamentos ou esforços intensos.'),
    P('Organnact', 'Neutralatic Turbo', 'Nutrição', '1 L', 'Contribui para a redução do acúmulo de ácido lático em equinos.'),
    P('Organnact', 'O2 Fitoflu Turbo', 'Performance', '500 ml', 'Suplemento vitamínico aminoácido para equinos submetidos à prática regular de exercícios.', 'o2-fitoflu-turbo'),
    P('Organnact', 'HepHorse', 'Saúde', '500 ml', 'Suplemento vitamínico aminoácido; suporte nutricional ao bom funcionamento hepático.', 'hephorse'),

    // ---------------- CALBOS ----------------
    P('Calbos', 'Citronela', 'Higiene', '500 ml', 'Indicado para higiene e embelezamento de equinos, bovinos, ovinos e caprinos.'),
    P('Calbos', 'Shampoo Citronela', 'Higiene', '1 L e 5 L', 'Auxilia no embelezamento dos pelos, crina e cauda, com perfume suave.', 'shampoo-citronela-1'),
    P('Calbos', 'Spray Citronela', 'Higiene', '500 ml', 'Indicado para higiene e embelezamento de equinos, bovinos, ovinos e caprinos.'),
    P('Calbos', 'Abrilhantador Calbos', 'Higiene', '500 ml e 1 L', 'Promove brilho em equinos e bovinos; impede aderência de sujidades ao pelo.', 'abrilhantador-calbos-1'),
    P('Calbos', 'Calfoz', 'Saúde', '200 e 500 ml', 'Cálcio, Fósforo, Magnésio e Dextrose. Alta eficiência nas hipocalcemias e hipomagnesemias.', 'calfoz-1'),
    P('Calbos', 'Antec', 'Saúde', '4 comprimidos', 'Vermífugo de amplo espectro para gatos e cachorros, de fácil administração.'),
    P('Calbos', 'Amitraz', 'Saúde', '25 unidades', 'Carrapaticida para bovinos e sarnicida/piolhicida para ovinos.'),
    P('Calbos', 'Mustang Cromo', 'Nutrição', '5 kg', 'Suplemento mineral completo com probióticos; melhor condição corporal e desempenho.'),
    P('Calbos', 'Cipermetrina', 'Higiene', '1 L', 'Auxílio na eliminação de carrapatos e moscas; controle de mosca do chifre.'),
    P('Calbos', 'Hipofen', 'Saúde', '20 g', 'Vermífugo oral para equinos; pode ser usado em potros e fêmeas prenhes.'),
    P('Calbos', 'Serene Horse', 'Nutrição', '35 g', 'Suplemento vitamínico aminoácido para animais nervosos, provas e transporte.'),
    P('Calbos', 'Vit Ade', 'Saúde', '50 ml', 'Estimulante do crescimento, engorda e fertilidade; prevenção do raquitismo.', 'vit-ade'),
    P('Calbos', 'Rubralan', 'Saúde', '10 e 40 ml', 'Indicado no tratamento das anemias (piroplasmose, anaplasmose e verminose).'),
    P('Calbos', 'Sedacol', 'Saúde', '100 e 200 ml', 'Agente na debelação de síndromes congestivas do aparelho gastrintestinal.', 'sedacol-1'),
    P('Calbos', 'Placencal', 'Saúde', '200 ml', 'Aumento das contrações musculares do útero no momento do parto.'),
    P('Calbos', 'Pencil Pronto', 'Saúde', '50 ml', 'Antibiótico com ação analgésica e anti-inflamatória; amplo espectro de ação.'),
    P('Calbos', 'Ivermin Pasta Oral', 'Saúde', '6 g', 'Vermífugo para 600 kg de peso vivo; eficaz para grandes e pequenos estrôngilos.'),
    P('Calbos', 'Dexametasona', 'Saúde', '10 a 200 ml', 'Anti-inflamatório que atua reduzindo a dor e o inchaço rapidamente.'),
    P('Calbos', 'Neomastic', 'Saúde', '8 ml', 'Suspensão antibiótica para tratamento de mastites em vacas no período seco.'),
    P('Calbos', 'Mastical', 'Saúde', '12 seringas de 10 ml', 'Indicado para problemas no sistema mamário e terapia tópica em micoses.'),
    P('Calbos', 'Neocidine H', 'Nutrição', '1,75 L', 'Suplementação de cálcio, fósforo, magnésio, vitamina D3 e B12.', 'neocidine-h'),
    P('Calbos', 'Glicolcalbos', 'Saúde', '500 ml', 'Solução de Dextrose a 50%; energético potente e ação diurética.'),
    P('Calbos', 'Farinha de Cálcio Avícola', 'Nutrição', '1 kg', 'Suplemento mineral para aves com cálcio, fósforo e outros minerais.'),

    // ---------------- CENTRAL VET ----------------
    P('Central Vet', 'Atadura Elástica Coesiva', 'Saúde', '5 e 10 cm × 4,5 m', 'Bandagem estabilizadora de articulações e ligamentos; primeiros socorros e pós-operatório.'),
    P('Central Vet', 'Atadura Elástica Coesiva Sabor Amargo', 'Saúde', '5 e 10 cm × 4,5 m', 'Atadura estabilizadora com sabor amargo que evita mordeduras.'),

    // ---------------- HEEL (homeopáticos veterinários) ----------------
    P('Heel', 'Engystol', 'Saúde', '5 ampolas de 1 ml', 'Medicamento homeopático injetável de uso parenteral para uso veterinário.'),
    P('Heel', 'Traumeel', 'Saúde', '50 comprimidos', 'Indicado para bovinos, equinos, asininos, ovinos, suínos, caninos e felinos.'),
    P('Heel', 'Zeel', 'Saúde', '5 ampolas de 5 ml', 'Solução injetável indicada para bovinos, equinos, suínos, ovinos, caprinos, caninos e felinos.'),

    // ---------------- PAPA MOSCA / J.A. AMBIENTAL ----------------
    P('Papa Mosca', 'Papa Mosca', 'Higiene', '6 L', 'Atrativo biológico que combate as moscas de forma eficaz e sustentável, sem venenos ou inseticidas.'),
    P('Papa Mosca', 'Atrativo Natural Pet', 'Higiene', '2 L', 'Solução ecológica e definitiva contra as moscas.'),
    P('Papa Mosca', 'Papa Insetos', 'Higiene', '500 ml', 'Composição Methomyl 0,066% + surfactantes; controle de insetos.'),
    P('Papa Mosca', 'Armadilha de Tela', 'Higiene', 'unidade', 'Rede protetora e recipiente para captura de moscas.'),
    P('Papa Mosca', 'Armadilha Biológica', 'Higiene', 'unidade', 'Armadilha montada: funil, cuba, tampa, aranha, trava borboleta e haste.'),
    P('Papa Mosca', 'Ratoeira Injetável T-Rex', 'Higiene', 'unidade', 'Ratoeira injetada em polipropileno virgem, mola de alta pressão; resistente ao sol e chuva.', 'ratoeira-injetavel-t-rex'),
    P('Papa Mosca', 'Porta Iscas para Ratos', 'Higiene', 'unidade', 'Porta-iscas em polipropileno virgem com 4 funções de captura; ferro de fixação e chave universal.'),

    // ---------------- LAMBARI (massas prontas para pesca) ----------------
    P('Lambari', 'Massa Pacu Goiaba', 'Pesca', '100 g', 'Massa pronta para pesca de pacu, sabor goiaba.', 'massa-pacu-goiaba'),
    P('Lambari', 'Massa Pacu Milho Verde', 'Pesca', '100 g', 'Massa pronta para pesca de pacu, sabor milho verde.', 'massa-pacu-milho-verde'),
    P('Lambari', 'Massa Pacu Queijo', 'Pesca', '100 g', 'Massa pronta para pesca de pacu, sabor queijo.', 'massa-pacu-queijo'),
    P('Lambari', 'Massa Pacu Sangue', 'Pesca', '100 g', 'Massa pronta para pesca de pacu, sabor sangue.', 'massa-pacu-sangue'),
    P('Lambari', 'Massa Piau Bichinho da Laranja', 'Pesca', '100 g', 'Massa pronta para pesca de piau, sabor bichinho da laranja.', 'massa-piau-bichinho-da-laranja'),
    P('Lambari', 'Massa Piau Milho Verde', 'Pesca', '100 g', 'Massa pronta para pesca de piau, sabor milho verde.', 'massa-piau-milho-verde'),
    P('Lambari', 'Massa Piau Queijo', 'Pesca', '100 g', 'Massa pronta para pesca de piau, sabor queijo.', 'massa-piau-queijo'),
    P('Lambari', 'Massa Piau Sangue', 'Pesca', '100 g', 'Massa pronta para pesca de piau, sabor sangue.', 'massa-piau-sangue'),
    P('Lambari', 'Massa Tilápia Bichinho da Laranja', 'Pesca', '100 g', 'Massa pronta para pesca de tilápia, sabor bichinho da laranja.', 'massa-tilapia-bichinho-da-laranja'),
    P('Lambari', 'Massa Tilápia Erva Doce', 'Pesca', '100 g', 'Massa pronta para pesca de tilápia, sabor erva doce.', 'massa-tilapia-erva-doce'),
    P('Lambari', 'Massa Tilápia Milho Verde', 'Pesca', '100 g', 'Massa pronta para pesca de tilápia, sabor milho verde.', 'massa-tilapia-milho-verde'),
    P('Lambari', 'Massa Tilápia P-40', 'Pesca', '100 g', 'Massa pronta para pesca de tilápia, isca P-40.', 'massa-tilapia-p-40'),
    P('Lambari', 'Massa Pronta para Pesca Natural', 'Pesca', '100 g', 'Massa pronta para pesca de lambari, sabor natural.', 'massa-pronta-para-pesca-natural'),
    P('Lambari', 'Massa Pronta para Pescar Milho Verde', 'Pesca', '100 g', 'Massa pronta para pesca de lambari, sabor milho verde.', 'massa-pronta-para-pescar-sabor-milho-verde'),
    P('Lambari', 'Massa Pronta para Pescar Queijo', 'Pesca', '100 g', 'Massa pronta para pesca de lambari, sabor queijo.', 'massa-pronta-para-pescar-sabor-queijo'),
    P('Lambari', 'Minhoca Pronta Carne Fina', 'Pesca', '100 g', 'Minhoca pronta para pesca, carne fina.', 'minhoca-pronta-carne-fina'),

    // ---------------- HORSE (marca própria) ----------------
    P('Horse', 'Escova para Animal', 'Higiene', 'unidade', 'Escova para cavalos; ferramenta certa para manter a pelagem limpa e saudável.'),
  ];
})();
