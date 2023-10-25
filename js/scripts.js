/**
 * Eduard Gonzalez
 * Any 2023
 */

var funcio = (function () {
    // Variables privades
    const globLlistaAlumnes = [
        { id: 1, nom: "Abril Abelló", llistaIdBalls: [22,32,] },
        { id: 2, nom: "Abril Cobos", llistaIdBalls: [5,17,27,33,] },
        { id: 3, nom: "Abril Fernández", llistaIdBalls: [12,] },
        { id: 4, nom: "Abril Garibotti", llistaIdBalls: [32,] },
        { id: 5, nom: "Abril LLevat", llistaIdBalls: [11,] },
        { id: 6, nom: "Abril Prats", llistaIdBalls: [25,] },
        { id: 7, nom: "Adela Soro", llistaIdBalls: [17,30,] },
        { id: 8, nom: "Adriana Tusset", llistaIdBalls: [12,] },
        { id: 9, nom: "Aina Baena", llistaIdBalls: [5,17,27,30,] },
        { id: 10, nom: "Aina Colom", llistaIdBalls: [10,13,28,] },
        { id: 11, nom: "Aina Font de Rubinat", llistaIdBalls: [1,19,] },
        { id: 12, nom: "Aina Mallor", llistaIdBalls: [5,27,] },
        { id: 13, nom: "Aina Morales", llistaIdBalls: [21,] },
        { id: 14, nom: "Aina Ortiz", llistaIdBalls: [1,] },
        { id: 15, nom: "Aina Velasco", llistaIdBalls: [16,] },
        { id: 16, nom: "Aitana Carrasco", llistaIdBalls: [4,18,] },
        { id: 17, nom: "Aitana Muñoz", llistaIdBalls: [1,] },
        { id: 18, nom: "Alba Bolinches", llistaIdBalls: [31,] },
        { id: 19, nom: "Alba Martín", llistaIdBalls: [11,] },
        { id: 20, nom: "Alba Plana", llistaIdBalls: [27,] },
        { id: 21, nom: "Albert Rivero", llistaIdBalls: [19,] },
        { id: 22, nom: "Alexia Bustos", llistaIdBalls: [22,32,] },
        { id: 23, nom: "Alexia Trillo", llistaIdBalls: [5,27,33,] },
        { id: 24, nom: "Alícia López", llistaIdBalls: [1,9,15,19,25] },
        { id: 25, nom: "Andrea Mayelin", llistaIdBalls: [6,15,19,25,] },
        { id: 26, nom: "Andrea Fillol", llistaIdBalls: [19,] },
        { id: 27, nom: "Anna Boqué", llistaIdBalls: [6,9,25,] },
        { id: 28, nom: "Ariadna Damunt", llistaIdBalls: [18,32,] },
        { id: 29, nom: "Ariadna Llorenç", llistaIdBalls: [32,] },
        { id: 30, nom: "Ariadna Mas", llistaIdBalls: [2,7,14,20,26,34,] },
        { id: 31, nom: "Arlet Domènech", llistaIdBalls: [4,23,] },
        { id: 32, nom: "Arlet Fernàndez", llistaIdBalls: [23,] },
        { id: 33, nom: "Arlet Nogués", llistaIdBalls: [32,] },
        { id: 34, nom: "Arlet Ossò", llistaIdBalls: [21,] },
        { id: 35, nom: "Asia Torrents", llistaIdBalls: [5,17,30,33,] },
        { id: 36, nom: "Atenea-Nicole Salcedo", llistaIdBalls: [12,] },
        { id: 37, nom: "Beatriz Olivares", llistaIdBalls: [7,] },
        { id: 38, nom: "Berta Abad", llistaIdBalls: [3,22,32,] },
        { id: 39, nom: "Berta Borràs", llistaIdBalls: [11,] },
        { id: 40, nom: "Berta Gras", llistaIdBalls: [12,] },
        { id: 41, nom: "Berta Puig", llistaIdBalls: [10,13,28,] },
        { id: 42, nom: "Berta Roca", llistaIdBalls: [27,33,] },
        { id: 43, nom: "Berta Roig", llistaIdBalls: [1,19,] },
        { id: 44, nom: "Berta Serrano", llistaIdBalls: [2,7,29,] },
        { id: 45, nom: "Biel Llauradó", llistaIdBalls: [2,7,14,34,] },
        { id: 46, nom: "Blanca Baró", llistaIdBalls: [31,] },
        { id: 47, nom: "Blanca Boj", llistaIdBalls: [6,7,9,15,19,25,31,] },
        { id: 48, nom: "Blanca Font", llistaIdBalls: [7,20,29,] },
        { id: 49, nom: "Blanca Gironès", llistaIdBalls: [5,17,30,] },
        { id: 50, nom: "Blanca Velasco", llistaIdBalls: [18,] },
        { id: 51, nom: "Bruna Andreu", llistaIdBalls: [7,29,34,] },
        { id: 52, nom: "Bruna García", llistaIdBalls: [20,34,] },
        { id: 53, nom: "Bruna Moliner", llistaIdBalls: [20,26,34,] },
        { id: 54, nom: "Brunilda Muñoz", llistaIdBalls: [6,9,25,] },
        { id: 55, nom: "Camill Alvarado", llistaIdBalls: [23,] },
        { id: 56, nom: "Carla Baiges", llistaIdBalls: [11,] },
        { id: 57, nom: "Carla Belmonte", llistaIdBalls: [29,] },
        { id: 58, nom: "Carla Lacueva", llistaIdBalls: [22,32,] },
        { id: 59, nom: "Carla Molluna", llistaIdBalls: [13,24,28,] },
        { id: 60, nom: "Carla Pellicer", llistaIdBalls: [7,20,29,] },
        { id: 61, nom: "Carla Prodaniuc", llistaIdBalls: [25,] },
        { id: 62, nom: "Carla Samarra", llistaIdBalls: [13,24,28,] },
        { id: 63, nom: "Carla Vallès", llistaIdBalls: [24,28,] },
        { id: 64, nom: "Carlota Ferrer", llistaIdBalls: [18,22,32,] },
        { id: 65, nom: "Carlota Guarque", llistaIdBalls: [11,] },
        { id: 66, nom: "Carlota Rincón", llistaIdBalls: [17,27,30,] },
        { id: 67, nom: "Chloe Gilabert", llistaIdBalls: [12,] },
        { id: 68, nom: "Chloe Thomée", llistaIdBalls: [18,32,] },
        { id: 69, nom: "Clara Gallisà", llistaIdBalls: [22,32,] },
        { id: 70, nom: "Clara Vallès", llistaIdBalls: [13,] },
        { id: 71, nom: "Cloe Filip", llistaIdBalls: [4,18,32,] },
        { id: 72, nom: "Clàudia Gallego", llistaIdBalls: [13,24,28,] },
        { id: 73, nom: "Clàudia Mas", llistaIdBalls: [1,19,] },
        { id: 74, nom: "Clàudia Monné", llistaIdBalls: [7,29,] },
        { id: 75, nom: "Clàudia Pinel", llistaIdBalls: [2,7,29,] },
        { id: 76, nom: "Clàudia Pinyol", llistaIdBalls: [27,] },
        { id: 77, nom: "Clàudia Royo", llistaIdBalls: [2,7,20,34,] },
        { id: 78, nom: "Clàudia Vilalta", llistaIdBalls: [11,] },
        { id: 79, nom: "Càtia Méndez", llistaIdBalls: [17,30,] },
        { id: 80, nom: "Cèlia Teixidó", llistaIdBalls: [12,] },
        { id: 81, nom: "Daniella Carrasco", llistaIdBalls: [4,18,23,] },
        { id: 82, nom: "Diana Bravo", llistaIdBalls: [8,18,] },
        { id: 83, nom: "Edna Andreu", llistaIdBalls: [5,27,] },
        { id: 84, nom: "Edurne Vidal", llistaIdBalls: [22,32,] },
        { id: 85, nom: "Elisabet Cuartero", llistaIdBalls: [22,32,] },
        { id: 86, nom: "Elisaveta Fortuny", llistaIdBalls: [12,] },
        { id: 87, nom: "Elsa Molies", llistaIdBalls: [32,] },
        { id: 88, nom: "Elsa Pàmies", llistaIdBalls: [23,] },
        { id: 89, nom: "Emma Ajenjo", llistaIdBalls: [24,28,] },
        { id: 90, nom: "Emma Alvarez", llistaIdBalls: [12,] },
        { id: 91, nom: "Emma Borràs", llistaIdBalls: [23,] },
        { id: 92, nom: "Emma Molias", llistaIdBalls: [12,] },
        { id: 93, nom: "Emma Nogués", llistaIdBalls: [12,] },
        { id: 94, nom: "Emma Oliva", llistaIdBalls: [10,13,] },
        { id: 95, nom: "Esther Monforte", llistaIdBalls: [16,] },
        { id: 96, nom: "Esther Vilalta", llistaIdBalls: [6,19,25,] },
        { id: 97, nom: "Fran García", llistaIdBalls: [2,7,14,20,29,] },
        { id: 98, nom: "Gabriela Caballé", llistaIdBalls: [1,19,] },
        { id: 99, nom: "Gal.la Ezquerra", llistaIdBalls: [27,] },
        { id: 100, nom: "Gal·la Gutiérrez", llistaIdBalls: [11,] },
        { id: 101, nom: "Gemma Creus", llistaIdBalls: [16,] },
        { id: 102, nom: "Gemma Marín", llistaIdBalls: [5,27,] },
        { id: 103, nom: "Gemma Pérez", llistaIdBalls: [9,15,25,] },
        { id: 104, nom: "Genís Andreu", llistaIdBalls: [4,32,] },
        { id: 105, nom: "Ginesta Veciana", llistaIdBalls: [21,] },
        { id: 106, nom: "Gisela Mallor", llistaIdBalls: [21,] },
        { id: 107, nom: "Guillem Chabrera", llistaIdBalls: [5,6,19,25,] },
        { id: 108, nom: "Imanol Rosario", llistaIdBalls: [19,] },
        { id: 109, nom: "Irene Figuerola", llistaIdBalls: [7,] },
        { id: 110, nom: "Irene García", llistaIdBalls: [5,27,33,] },
        { id: 111, nom: "Isona Vernet", llistaIdBalls: [10,] },
        { id: 112, nom: "Ivet Mestre", llistaIdBalls: [5,17,27,30,33,] },
        { id: 113, nom: "Ivet Ossó", llistaIdBalls: [7,26,] },
        { id: 114, nom: "Ivet Villar", llistaIdBalls: [32,] },
        { id: 115, nom: "Jan Martínez", llistaIdBalls: [24,28,] },
        { id: 116, nom: "Jana Ciurana", llistaIdBalls: [22,32,] },
        { id: 117, nom: "Jana Pinyol", llistaIdBalls: [10,13,28,] },
        { id: 118, nom: "Jana Salas", llistaIdBalls: [12,] },
        { id: 119, nom: "Jennifer Andrade", llistaIdBalls: [3,8,18,] },
        { id: 120, nom: "Joanna-Lucia Fernández", llistaIdBalls: [11,] },
        { id: 121, nom: "Jordina Almacellas", llistaIdBalls: [16,] },
        { id: 122, nom: "Jordina Fernández", llistaIdBalls: [5,27,33,] },
        { id: 123, nom: "Judit López", llistaIdBalls: [1,] },
        { id: 124, nom: "Judit Segura", llistaIdBalls: [16,] },
        { id: 125, nom: "Judith Solano", llistaIdBalls: [9,15,25,] },
        { id: 126, nom: "Júlia Arbonès", llistaIdBalls: [9,] },
        { id: 127, nom: "Júlia Arias", llistaIdBalls: [26,29,] },
        { id: 128, nom: "Júlia Barriach", llistaIdBalls: [9,15,25,31,] },
        { id: 129, nom: "Júlia Montserrat", llistaIdBalls: [24,28,] },
        { id: 130, nom: "Júlia Pinyol", llistaIdBalls: [1,19,] },
        { id: 131, nom: "Júlia Roca", llistaIdBalls: [25,] },
        { id: 132, nom: "Júlia Soro", llistaIdBalls: [1,9,25,] },
        { id: 133, nom: "Júlia Álvarez", llistaIdBalls: [26] },
        { id: 134, nom: "Laia Flors", llistaIdBalls: [5,17,27,30,] },
        { id: 135, nom: "Laia Guinovart", llistaIdBalls: [6,9,25,] },
        { id: 136, nom: "Laia Rincón", llistaIdBalls: [10,24,28,] },
        { id: 137, nom: "Laia Rius", llistaIdBalls: [20,26,34,] },
        { id: 138, nom: "Laia Vilarrubí", llistaIdBalls: [22,32,] },
        { id: 139, nom: "Laura Albaigès", llistaIdBalls: [1,19,] },
        { id: 140, nom: "Laura Llaberia", llistaIdBalls: [7,26,29,] },
        { id: 141, nom: "Laura Murillo", llistaIdBalls: [3,8,18,21,] },
        { id: 142, nom: "Leire Arroyos", llistaIdBalls: [11,] },
        { id: 143, nom: "Leo Villa", llistaIdBalls: [17,30,] },
        { id: 144, nom: "Lidia Martínez", llistaIdBalls: [10,13,] },
        { id: 145, nom: "Llívia Macaya", llistaIdBalls: [10,24,28,] },
        { id: 146, nom: "Lourdes González", llistaIdBalls: [16,] },
        { id: 147, nom: "Lucía Arenas", llistaIdBalls: [10,13,] },
        { id: 148, nom: "Lucía Filip", llistaIdBalls: [18,22,32,] },
        { id: 149, nom: "Lucía Gumbau", llistaIdBalls: [27,] },
        { id: 150, nom: "Maia Martin", llistaIdBalls: [24,28,] },
        { id: 151, nom: "Mar Chavarría", llistaIdBalls: [32,] },
        { id: 152, nom: "Mar Delgado", llistaIdBalls: [3,8,] },
        { id: 153, nom: "Mar Jaques", llistaIdBalls: [7,] },
        { id: 154, nom: "Marc Folch", llistaIdBalls: [9,] },
        { id: 155, nom: "Marc Muñoz", llistaIdBalls: [12,] },
        { id: 156, nom: "Maria Carreño", llistaIdBalls: [26,] },
        { id: 157, nom: "Maria Figueres", llistaIdBalls: [1,5,6,9,19,25,] },
        { id: 158, nom: "Maria Martí", llistaIdBalls: [8,21,] },
        { id: 159, nom: "Maria Morales", llistaIdBalls: [5,27,33,] },
        { id: 160, nom: "Maria Soro", llistaIdBalls: [24,28,] },
        { id: 161, nom: "Maribel Reche", llistaIdBalls: [16,] },
        { id: 162, nom: "Marina Boj", llistaIdBalls: [1,6,9,19,25,] },
        { id: 163, nom: "Marina Torrents", llistaIdBalls: [6,9,15,25,31,] },
        { id: 164, nom: "Mariona Batlle", llistaIdBalls: [1,19,] },
        { id: 165, nom: "Mariona Llauradó", llistaIdBalls: [24,] },
        { id: 166, nom: "Marta Carrillo", llistaIdBalls: [5,27,33,] },
        { id: 167, nom: "Marta Pellicer", llistaIdBalls: [17,30,] },
        { id: 168, nom: "Martina Bertran", llistaIdBalls: [23,] },
        { id: 169, nom: "Martina Colas", llistaIdBalls: [26,29,] },
        { id: 170, nom: "Martina Forcadell", llistaIdBalls: [21,] },
        { id: 171, nom: "Martina Irazuzta", llistaIdBalls: [13,24,28,] },
        { id: 172, nom: "Martina Ramírez", llistaIdBalls: [11,] },
        { id: 173, nom: "Martina Roig", llistaIdBalls: [6,9,19,25,] },
        { id: 174, nom: "Mercè Revelo", llistaIdBalls: [18,32,] },
        { id: 175, nom: "Mireia Galmes", llistaIdBalls: [9,] },
        { id: 176, nom: "Mireia Solano", llistaIdBalls: [15,24,] },
        { id: 177, nom: "Montse Andrade", llistaIdBalls: [20,] },
        { id: 178, nom: "Montse Queralt", llistaIdBalls: [16,] },
        { id: 179, nom: "Nicole Agnes", llistaIdBalls: [8,21,] },
        { id: 180, nom: "Nina Folch", llistaIdBalls: [12,] },
        { id: 181, nom: "Noa Minerba", llistaIdBalls: [9,25,] },
        { id: 182, nom: "Nàroa Forés", llistaIdBalls: [24,28,] },
        { id: 183, nom: "Núria Gallardo", llistaIdBalls: [9,25,] },
        { id: 184, nom: "Núria Gázquez", llistaIdBalls: [10,28] },
        { id: 185, nom: "Núria Miquel", llistaIdBalls: [2,7,29,] },
        { id: 186, nom: "Ona Abelló", llistaIdBalls: [12,] },
        { id: 187, nom: "Ona Monje", llistaIdBalls: [11,] },
        { id: 188, nom: "Ona Puig", llistaIdBalls: [2,7,14,26,34,] },
        { id: 189, nom: "Ona Randuà", llistaIdBalls: [20,26,34,] },
        { id: 190, nom: "Ona Ribes", llistaIdBalls: [5,17,30,] },
        { id: 191, nom: "Oriol Barriach", llistaIdBalls: [3,8,18,] },
        { id: 192, nom: "Pablo Simó", llistaIdBalls: [8,32,] },
        { id: 193, nom: "Patricia Prats", llistaIdBalls: [16,] },
        { id: 194, nom: "Paula Batalla", llistaIdBalls: [1,19,] },
        { id: 195, nom: "Paula Martí", llistaIdBalls: [24,28,] },
        { id: 196, nom: "Paula Montero", llistaIdBalls: [12,] },
        { id: 197, nom: "Paula Muñoz", llistaIdBalls: [18,22,32,] },
        { id: 198, nom: "Paula Sánchez", llistaIdBalls: [27,33,] },
        { id: 199, nom: "Paula Velasco", llistaIdBalls: [2,7,14,20,34,] },
        { id: 200, nom: "Perwin Khan", llistaIdBalls: [18,] },
        { id: 201, nom: "Puri Sánchez", llistaIdBalls: [16,] },
        { id: 202, nom: "Queralt Puig", llistaIdBalls: [3,5,18,] },
        { id: 203, nom: "Rijab Azammouy", llistaIdBalls: [27,] },
        { id: 204, nom: "Roc Olivé", llistaIdBalls: [32,] },
        { id: 205, nom: "Roma Domingo", llistaIdBalls: [12,] },
        { id: 206, nom: "Sara Arcelí", llistaIdBalls: [2,] },
        { id: 207, nom: "Sara Simó", llistaIdBalls: [15,19,25,31,] },
        { id: 208, nom: "Sita Serradell", llistaIdBalls: [16,] },
        { id: 209, nom: "Siurana Veciana", llistaIdBalls: [17,30,] },
        { id: 210, nom: "Sofía Crespi", llistaIdBalls: [11,] },
        { id: 211, nom: "Sofía Domènech", llistaIdBalls: [23,] },
        { id: 212, nom: "Sofía Ruiz", llistaIdBalls: [5,27,33] },
        { id: 213, nom: "Susana Morillo", llistaIdBalls: [16,] },
        { id: 214, nom: "Sònia Murillo", llistaIdBalls: [5,] },
        { id: 215, nom: "Tanit Chabrera", llistaIdBalls: [13,15,24,28,] },
        { id: 216, nom: "Valeria Arroyos", llistaIdBalls: [18,23,] },
        { id: 217, nom: "Vinyet Casadó", llistaIdBalls: [12,] },
        { id: 218, nom: "Xin Serra", llistaIdBalls: [9,] },
        { id: 219, nom: "Àngels Rivero", llistaIdBalls: [16,] },
        { id: 220, nom: "Àsia Torrent", llistaIdBalls: [5,17,27,30,33,] },
        { id: 221, nom: "Èlia Armengol", llistaIdBalls: [9,25,] },
        { id: 222, nom: "Èlia Cerón", llistaIdBalls: [5,30,] },
        { id: 223, nom: "Ïu Carbonell", llistaIdBalls: [32,] },
        { id: 224, nom: "Sandra Simón", llistaIdBalls: [9,15,19,24,25,31,] },
        { id: 225, nom: "Olívia Arévalo", llistaIdBalls: [12] },
    ];
    const globLlistaBalls = [
        { id: 1, nom: "Amèrica", grups: "3r/Taller Danses Urbanes", section: 1, llistaIdDies: [1,2,3] },
        { id: 2, nom: "Biblioteca 1", grups: "1r AP (A) Espanyol", section: 2, llistaIdDies: [2,3] },
        { id: 3, nom: "Biblioteca 2", grups: "2n AB Contemporani", section: 2, llistaIdDies: [1,2] },
        { id: 4, nom: "Biblioteca 3", grups: "1r/2n PEE Jazz", section: 2, llistaIdDies: [1,2] },
        { id: 5, nom: "Queen 1 - Treball de recerca", grups: "3r/4t AB Clàssic", section: 3, llistaIdDies: [2,3] },
        { id: 6, nom: "Queen 2 - Treball de recerca", grups: "Taller Clàssic", section: 3, llistaIdDies: [1,2,3] },
        { id: 7, nom: "Jewels", grups: "1r AP (A i B) Clàssic", section: 3, llistaIdDies: [2,3] },
        { id: 8, nom: "Mèxic - Treball de recerca", grups: "2n AB Clàssic", section: 3, llistaIdDies: [1,2] },
        { id: 9, nom: "Festival el COS", grups: "Taller de Contemporani", section: 4, llistaIdDies: [1,2,3] },
        { id: 10, nom: "Visita al cementiri", grups: "2n AP Jazz", section: 4, llistaIdDies: [1,2,3] },
        { id: 11, nom: "Encesa de llums de nadal - Treball de recerca", grups: "Iniciació P5", section: 4, llistaIdDies: [2,3] },
        { id: 12, nom: "Frozen - Treball de recerca", grups: "Iniciació P3 i P4", section: 4, llistaIdDies: [1,2] },
        { id: 13, nom: "Trencanous - Treball de recerca", grups: "2n AP Danses Urbanes", section: 4, llistaIdDies: [1,2,3] },
        { id: 14, nom: "Rock - Treball de recerca", grups: "1r AP Flamenc", section: 4, llistaIdDies: [2,3] },
        { id: 15, nom: "Dia de la dona treballadora - Treball de recerca", grups: "Taller de Flamenc", section: 4, llistaIdDies: [1,2,3] },
        { id: 16, nom: "El tendero - Treball de recerca", grups: "Perfeccionament Flamenc", section: 4, llistaIdDies: [1,2,3] },
        { id: 17, nom: "Festival fi curs Videojocs - Treball de recerca", grups: "3r/4t AB Danses Urbanes", section: 4, llistaIdDies: [2,3] },
        { id: 18, nom: "Concursos - Treball de recerca", grups: "1r/2n PEE Espanyol", section: 4, llistaIdDies: [1,2] },
        { id: 19, nom: "Històries d'amor", grups: "Taller Jazz", section: 5, llistaIdDies: [1,2,3] },
        { id: 20, nom: "Arribada del carnestoltes", grups: "1r AP Danses Urbanes", section: 5, llistaIdDies: [2,3] },
        { id: 21, nom: "Brasil", grups: "2n AB Jazz", section: 5, llistaIdDies: [1,2] },
        { id: 22, nom: "Venècia", grups: "1r AB Clàssic", section: 5, llistaIdDies: [1,2] },
        { id: 23, nom: "Coppelia 1", grups: "2n PEE Clàssic", section: 5, llistaIdDies: [1,2] },
        { id: 24, nom: "Coppelia 2", grups: "2n AP Clàssic", section: 5, llistaIdDies: [1,2,3] },
        // Mitja part:
        { id: 25, nom: "Suite del Llac dels cignes - Treball de recerca", grups: "3r AP/Taller Clàssic", section: 6, llistaIdDies: [1,2,3] },
        { id: 26, nom: "La ràdio - Treball de recerca", grups: "1r AP Jazz", section: 6, llistaIdDies: [2,3] },
        { id: 27, nom: "La volta al món - Treball de recerca", grups: "3r/4t AB Contemporani", section: 6, llistaIdDies: [2,3] },
        { id: 28, nom: "Les tribus - Treball de recerca", grups: "2n AP (A) Contemporani", section: 6, llistaIdDies: [1,2,3] },
        { id: 29, nom: "Roses", grups: "1r AP (B) Contemporani", section: 7, llistaIdDies: [2,3] },
        { id: 30, nom: "Matilda", grups: "3r/4t AB Jazz", section: 7, llistaIdDies: [2,3] },
        { id: 31, nom: "Foc de Sant Joan", grups: "Flamenc Avançat", section: 7, llistaIdDies: [1,2,3] },
        { id: 32, nom: "Festa Major", grups: "1r PEE Clàssic i 1r AB Jazz", section: 7, llistaIdDies: [1,2] },
        { id: 33, nom: "Revetlla 1", grups: "3r/4t AB Espanyol", section: 7, llistaIdDies: [2,3] },
        { id: 34, nom: "Revetlla 2", grups: "1r AP (A) Contemporani", section: 7, llistaIdDies: [2,3] },
        { id: 35, nom: "Desfilada - Bolero de Ravel", grups: "Tots", section: 7, llistaIdDies: [1,2,3] },
    ];

    const globLlistaDies = [
        { id: 1, nom: "divendres, 2 de juny", inici: "18:00", llistaIdBalls: [1,3,4,6,8,9,10,12,13,15,16,18,19,21,22,23,24,25,28,31,32,35]},
        { id: 2, nom: "dissabte, 3 de juny", inici: "18:00", llistaIdBalls: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35]},
        { id: 3, nom: "diumenge, 4 de juny", inici: "17:00", llistaIdBalls: [1,2,5,6,7,9,10,11,13,14,15,16,17,19,20,24,25,26,27,28,29,30,31,33,34,35]}
    ];

    var globLlistaAlumnesBalls = [];
    var globLlistaAlumnesBallsDies = [];
    var globLlistaDiesBalls = [];

    // MÈTODES PRIVATS
    /**
     * Captura els caràcters introduïts al formulari de cerca i
     * presenta una llista amb noms coincidents
     */
    function searchInput() {
        let nomNormalitzat = "";
        let divResultatsCerca = document.getElementById("resultatsCerca");
        let inputSearchText = document.getElementById("inputCercaAlumne").value.trim();

        divResultatsCerca.innerHTML = "";
        if (inputSearchText) {
            inputSearchText = inputSearchText.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
            globLlistaAlumnes.forEach(
                function (alumne) {
                    nomNormalitzat = alumne.nom.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
                    if (nomNormalitzat.indexOf(inputSearchText) != -1) {
                        divResultatsCerca.innerHTML += '<a href="#" onclick="funcio.filtres.aplicarFiltres(event,-1)" class="list-group-item list-group-item-action" data-alumne-id="' + alumne.id + '">' + alumne.nom + '</a>';
                    }
                }
            );
        }
    }


    /**
     * Captura el dia triat. Quan es canvia de dia, es tornen a mostrar
     * tots els balls i s'elimina qualsevol filtre d'alumne
     */
    function selectInput() {
        let divEspaiFiltres = document.getElementById("espaiFiltres");

        if (divEspaiFiltres.hasChildNodes()) {
            let idAlumne = parseInt(document.getElementById("alert-data-alumne").dataset.idAlumne);
            showElementsByDay();
            applyFilters(null, idAlumne);
        } else {
            showElementsByDay();
        }
    }

    /**
     * Tracta el filtre activat per l'usuari amaga la llista de
     * resultats i neteja el camp de cerca.
     * Si l'usuari introdueix un altre filtre, esborra l'actual
     * @param event
     */
    function applyFilters(event, idAlumne) {
        let alumne;

        if (event !== null) {
            event.preventDefault();
            alumne = globLlistaAlumnes.find( (alumne) => alumne.id === parseInt(event.target.dataset.alumneId) );
        }
        if (event === null && idAlumne !== -1) {
            alumne = globLlistaAlumnes.find( (alumne) => alumne.id === idAlumne );
        }


        let select = document.getElementById('selectDia');
        let diaTriat = parseInt(select.options[select.selectedIndex].value);
        let divEspaiFiltres = document.getElementById("espaiFiltres");
        let llistaBallsPerAlumneiDia = globLlistaAlumnesBallsDies.filter( (alumneBallDia) => (alumneBallDia.alumneId === alumne.id && alumneBallDia.diaId === diaTriat));
        let llistaBallsIds = [];
        let section;
        let llistaBallsSections = [];
        let divResultatsCerca = document.getElementById("resultatsCerca");
        let inputSearchText = document.getElementById("inputCercaAlumne");

        // Si té un filtre actiu, l'esborrem
        if (divEspaiFiltres.hasChildNodes()) {
            divEspaiFiltres.innerHTML = "";
            showElementsByDay();
        }

        llistaBallsPerAlumneiDia.forEach(function (alumneBalliDia) {
            llistaBallsIds.push(alumneBalliDia.ballId);
            section = globLlistaBalls.find( (ball) => alumneBalliDia.ballId === ball.id ).section;
            if (llistaBallsSections.indexOf(section) === -1) {
                llistaBallsSections.push(section);
            }
        });

        // Incorporem un nou filtre a la finestra
        divEspaiFiltres.innerHTML +=
            '<div class="alert ' +
            (llistaBallsIds.length > 0 ? 'alert-info ' : 'alert-danger ') +
            'alert-dismissible fade show" role="alert">' +
            '<h4 class="alert-heading"><span id="alert-data-alumne" data-id-alumne="' +
            alumne.id +
            '">' +
            alumne.nom +
            '</span></h4>' +
            '<p>El ' +
            globLlistaDies[diaTriat - 1].nom +
            ', participa en <strong>' +
            llistaBallsIds.length +
            ' ball(s)</strong></p>' +
            (llistaBallsIds.length > 0 ? '<hr><p class="mb-0"><a href="#graellaBalls">Veure els balls <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/></svg></a></p>' : '') +
            '<button onclick="funcio.finestra.resetLlistaBalls()" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';


        //hidePatrocini();
        //hideSectionNotIn(llistaBallsSections);
        hideGridElementsByIds(llistaBallsIds);
        divResultatsCerca.innerHTML = "";
        inputSearchText.value = "";
        /*
        if (llistaBallsIds.length > 0) {
            setTimeout(function () {
                document.getElementById("graellaBalls").scrollIntoView();
            }, 1000);
        }*/
    }

    /**
     * Oculta els patrocinis
     */
    function hidePatrocini() {
        let patrocini;
        for (i = 1; i <= 2; i++) {
            patrocini = document.getElementById("patrocini-area-" + i);
            patrocini.style.display = "none";
        }
    }

    /**
     * Oculta les seccions que no estan a la llista passada per paràmetre
     * @param llistaBallsSections
     */
    function hideSectionNotIn(llistaBallsSections) {
        let section;
        for (let i = 1; i <= 2; i++) {
            if (llistaBallsSections.indexOf(i) === -1) {
                section = document.getElementById("section_" + i);
                section.style.opacity = "0.2";
            }
        }
    }

    /**
     * Oculta els balls que nos estan a la llista passada per paràmetre
     * @param llistaBallsIds
     */
    function hideGridElementsByIds(llistaBallsIds) {
        let x;
        let ball;
        let divColBall;
        for (x in globLlistaBalls) {
            ball = globLlistaBalls[x];
            divColBall = document.getElementById("col-ball-" + ball.id);
            if (llistaBallsIds.indexOf(ball.id) !== -1) {
                divColBall.style.opacity = "1";
            } else {
                divColBall.style.opacity = "0.2";
            }
        }
    }

    /**
     * Mostra tots els balls de la graella
     */
    function showAllElements() {
        let x;
        let ball;
        let divColBall;
        let section;
        let patrocini;
        let i;

        for (i = 1; i <= 2; i++) {
            patrocini = document.getElementById("patrocini-area-" + i);
            patrocini.style.display = "block";
        }
        for (i = 1; i <= 2; i++) {
            section = document.getElementById("section_" + i);
            section.style.display = "block";
        }
        for (x in globLlistaBalls) {
            ball = globLlistaBalls[x];
            divColBall = document.getElementById("col-ball-" + ball.id);
            divColBall.style.display = "block";
        }
    }

    function hideGridElementsByDay() {
        let select = document.getElementById('selectDia');
        let diaTriat = parseInt(select.options[select.selectedIndex].value);
        let llistaBallsPerDia = globLlistaDiesBalls.filter( (diesBalls) => diesBalls.diaId === diaTriat );
        let llistaBallsId = llistaBallsPerDia.map(a => a.ballId);

        hideGridElementsByIds(llistaBallsId);
    }


    function showElementsByDay() {
        let x;
        let ball;
        let divColBall;
        let section;
        let patrocini;
        let i;


        for (i = 1; i <= 2; i++) {
            patrocini = document.getElementById("patrocini-area-" + i);
            patrocini.style.display = "block";
        }
        for (i = 1; i <= 2; i++) {
            section = document.getElementById("section_" + i);
            section.style.display = "block";
        }

        for (x in globLlistaBalls) {
            ball = globLlistaBalls[x];
            divColBall = document.getElementById("col-ball-" + ball.id);
            divColBall.style.display = "block";
        }

        hideGridElementsByDay();
    }


    /**
     * Prepara una cadena d'alumnes en funció d'un ball en concret
     * @param ballId
     * @returns {string}
     */
    function alumnesPerBallToString(ballId) {
        let llistaAlumnesBallsPerBall = globLlistaAlumnesBalls.filter( (alumneBall) => alumneBall.ballId === ballId );
        let cadenaAlumnes = "";

        llistaAlumnesBallsPerBall.forEach(function (alumneBall) {
            cadenaAlumnes += globLlistaAlumnes.find( (alumne) => alumne.id === alumneBall.alumneId ).nom + ', ';
        });
        return cadenaAlumnes.replace(/,\s*$/, "");
    }

    /**
     * Inicia la graella de balls
     */
    function initAlumnesBallsGrid() {
        let cadenaAlumnesBall;
        let divGraellaBallsNum;
        let ball;
        let x;

        for (x in globLlistaBalls) {
            ball = globLlistaBalls[x];
            cadenaAlumnesBall = alumnesPerBallToString(ball.id);
            divGraellaBallsNum = document.getElementById("graellaBalls_" + ball.section);
            divGraellaBallsNum.innerHTML += '<div class="col" id="col-ball-' + ball.id + '">' +
                '<div class="card shadow-sm">' +
                '<div class="card-body">' +
                '<h4 class="card-title">' +
                ball.id + '- ' + ball.nom +
                '</h4>' +
                '<div class="d-flex justify-content-between align-items-center">' +
                '<h6>' +
                ball.grups +
                '</h6>' +
                //'<small class="text-muted">9 mins</small>' +
                '</div>' +
                '<p>' +
                cadenaAlumnesBall +
                '</p>' +
                '</div></div></div>';
        }
        hideGridElementsByDay();
    }

    
    function closeTopPromo() {
        divTopPromo = document.getElementById("top-promo");
        divTopPromo.style.display = 'none';
        //document.body.classList.remove("no-scroll");
    }

    // INTERFÍCIE
    return {
        filtres: {
            cercarAlumne: function () {
                searchInput();
            },
            triarDia: function () {
                selectInput();
            },
            aplicarFiltres: function (event, idAlumne) {
                applyFilters(event, idAlumne);
            }
        },
        dades: {
            /**
             * Crea relacions MN entre alumnes i balls
             */
            crearRelacionsAlumnesBalls: function () {
                globLlistaAlumnes.forEach(function (alumne) {
                    alumne.llistaIdBalls.forEach(function (ballId) {
                        globLlistaAlumnesBalls.push({ alumneId: alumne.id, ballId: globLlistaBalls[ballId - 1].id });
                    });
                });
            },
            crearRelacionsAlumnesBallsDies: function () {
                globLlistaAlumnes.forEach(function (alumne) {
                    alumne.llistaIdBalls.forEach(function (ballId) {
                        globLlistaBalls[ballId - 1].llistaIdDies.forEach(function (diaId) {
                            globLlistaAlumnesBallsDies.push({ alumneId: alumne.id, ballId: globLlistaBalls[ballId - 1].id, diaId: diaId });
                        });
                    });
                });
            },
            crearRelacionsBallsDies: function () {
                globLlistaDies.forEach(function (dia) {
                    dia.llistaIdBalls.forEach(function (ballId) {
                        globLlistaDiesBalls.push({ diaId: dia.id, ballId: globLlistaBalls[ballId - 1].id });
                    });
                });
            }
        },
        finestra: {
            iniciarLlistaBalls: function () {
                initAlumnesBallsGrid();
            },
            resetLlistaBalls: function () {
                let divEspaiFiltres = document.getElementById("espaiFiltres");
                if (divEspaiFiltres.hasChildNodes()) {
                    divEspaiFiltres.innerHTML = "";
                }
                showElementsByDay();
            },
            topPromoCountdown: function () {
                // Espera 5 segons i tanca la finestra
                setTimeout(() => {
                    closeTopPromo();
                }, 5000);
            },
            tancaTopPromo: function () {
                closeTopPromo();
            }
        }
    }
})();
