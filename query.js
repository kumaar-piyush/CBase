// Pages array with different sets of keywords and URLs
    const genePages = [
        { keyword: "CA7", url: "CA7.html" },{ keyword: "GUCA2B", url: "GUCA2B.html" },
        { keyword: "PYY", url: "PYY.html" },{ keyword: "CA1", url: "CA1.html" },
        { keyword: "GUCA2A", url: "GUCA2A.html" },{ keyword: "GCG", url: "GCG.html" },
        { keyword: "CA2", url: "CA2.html" },{ keyword: "CWH43", url: "CWH43.html" },
        { keyword: "PKIB", url: "PKIB.html" },{ keyword: "SLC26A2", url: "SLC26A2.html" },
        { keyword: "MS4A12", url: "MS4A12.html" },{ keyword: "SLC4A4", url: "SLC4A4.html" },
        { keyword: "CA4", url: "CA4.html" },{ keyword: "CD177", url: "CD177.html" },
        { keyword: "gene", url: "gene_C.html" },{ keyword: "CHGA", url: "CHGA.html" },
        { keyword: "SULT1A2", url: "SULT1A2.html" },{ keyword: "LYPD8", url: "LYPD8.html" },
        { keyword: "CHP2", url: "CHP2.html" },{ keyword: "ZG16", url: "ZG16.html" },
        { keyword: "BEST2", url: "BEST2.html" },{ keyword: "C2orf88", url: "C2orf88.html" },
        { keyword: "SCNN1B", url: "SCNN1B.html" },{ keyword: "MT1H", url: "MT1H.html" },
        { keyword: "PDE9A", url: "PDE9A.html" },{ keyword: "SPIB", url: "SPIB.html" },
        { keyword: "PADI2", url: "PADI2.html" },{ keyword: "CLDN8", url: "CLDN8.html" },
        { keyword: "NXPE4", url: "NXPE4.html" },{ keyword: "LDHD", url: "LDHD.html" },
        { keyword: "UGT2A3", url: "UGT2A3.html" },{ keyword: "MT1M", url: "MT1M.html" },
        { keyword: "ANO7", url: "ANO7.html" },{ keyword: "DHRS9", url: "DHRS9.html" },
        { keyword: "HSD11B2", url: "HSD11B2.html" },{ keyword: "NXPE1", url: "NXPE1.html" },
        { keyword: "MMP28", url: "MMP28.html" },{ keyword: "GPT", url: "GPT.html" },
        { keyword: "ADH1C", url: "ADH1C.html" },{ keyword: "IL1R2", url: "IL1R2.html" },
        { keyword: "DHRS11", url: "DHRS11.html" },{ keyword: "HRCT1", url: "HRCT1.html" },
        { keyword: "VSIG2", url: "VSIG2.html" },{ keyword: "MT1G", url: "MT1G.html" },
        { keyword: "SLC9A2", url: "SLC9A2.html" },{ keyword: "URAD", url: "URAD.html" },
        { keyword: "SCN9A", url: "SCN9A.html" },{ keyword: "TSPAN7", url: "TSPAN7.html" },
        { keyword: "HLA-G", url: "HLA-G.html" },{ keyword: "JCHAIN", url: "JCHAIN.html" },
        { keyword: "ADTRP", url: "ADTRP.html" },
        // Add more gene keywords and URLs as needed
    ];

    const proteinPages = [
        { keyword: "Carbonic anhydrase 7", url: "CA7.html" },
        { keyword: "Guanylate cyclase activator 2B", url: "GUCA2B.html" },
        { keyword: "Peptide YY", url: "PYY.html" },
        { keyword: "Carbonic anhydrase 1", url: "CA1.html" },
        { keyword: "Guanylin", url: "GUCA2A.html" },
        { keyword: "Pro-glucagon", url: "GCG.html" },
        { keyword: "Carbonic anhydrase 2", url: "CA2.html" },
        { keyword: "PGAP2-interacting protein", url: "CWH43.html" },
        { keyword: "cAMP-dependent protein kinase inhibitor beta", url: "PKIB.html" },
        { keyword: "Sulfate transporter", url: "SLC26A2.html" },
        { keyword: "Membrane-spanning 4-domains subfamily A member 12", url: "MS4A12.html" },
        { keyword: "Electrogenic sodium bicarbonate cotransporter 1", url: "SLC4A4.html" },
        { keyword: "Carbonic anhydrase 4", url: "CA4.html" },
        { keyword: "CD177 antigen", url: "CD177.html" },
        { keyword: "Chromogranin-A", url: "CHGA.html" },
        { keyword: "Sulfotransferase 1A2", url: "SULT1A2.html" },
        { keyword: "Ly6/PLAUR domain-containing protein 8", url: "LYPD8.html" },
        { keyword: "Calcineurin B homologous protein 2", url: "CHP2.html" },
        { keyword: "Zymogen granule membrane protein 16", url: "ZG16.html" },
        { keyword: "Bestrophin-2", url: "BEST2.html" },
        { keyword: "Small membrane A-kinase anchor protein", url: "C2orf88.html" },
        { keyword: "Amiloride-sensitive sodium channel subunit beta", url: "SCNN1B.html" },
        { keyword: "Metallothionein-1H", url: "MT1H.html" },
        { keyword: "High affinity cGMP-specific 3',5'-cyclic phosphodiesterase 9A", url: "PDE9A.html" },
        { keyword: "Transcription factor Spi-B", url: "SPIB.html" },
        { keyword: "Protein-arginine deiminase type-2", url: "PADI2.html" },
        { keyword: "Claudin-8", url: "CLDN8.html" },
        { keyword: "NXPE family member 4", url: "NXPE4.html" },
        { keyword: "Probable D-lactate dehydrogenase, mitochondrial", url: "LDHD.html" },
        { keyword: "UDP-glucuronosyltransferase 2A3", url: "UGT2A3.html" },
        { keyword: "Metallothionein-1M", url: "MT1M.html" },
        { keyword: "Anoctamin-7", url: "ANO7.html" },
        { keyword: "Dehydrogenase/reductase SDR family member 9", url: "DHRS9.html" },
        { keyword: "11-beta-hydroxysteroid dehydrogenase type 2", url: "HSD11B2.html" },
        { keyword: "NXPE family member 1", url: "NXPE1.html" },
        { keyword: "Matrix metalloproteinase-28", url: "MMP28.html" },
        { keyword: "Alanine aminotransferase 1", url: "GPT.html" },
        { keyword: "Alcohol dehydrogenase 1C", url: "ADH1C.html" },
        { keyword: "Interleukin-1 receptor type 2", url: "IL1R2.html" },
        { keyword: "Dehydrogenase/reductase SDR family member 11", url: "DHRS11.html" },
        { keyword: "protein Z", url: "protein_Z.html" },
        
        // Add more protein keywords and URLs as needed
    ];

const pathwayPages = [
    
        { keyword: "EGFR/MAPK signaling pathway", url: "EGFR_path.html" },
        { keyword: "Notch signaling pathway", url: "Notch_path.html" },
        { keyword: "PI3K/AKT/mTOR signaling pathway", url: "pi3k_path.html" },
        { keyword: "TGF-beta signaling pathway", url: "TGF_path.html" },
        { keyword: "Wnt signaling pathway", url: "wnt_path.html" },
        { keyword: "NF-kappa B signaling pathway", url: "NFKB_path.html" },
        // Add more protein keywords and URLs as needed
    ];

const compoundsPages = [
        { keyword: "protein X", url: "protein_X.html" },
        { keyword: "protein Y", url: "protein_Y.html" },
        { keyword: "protein Z", url: "protein_Z.html" },
        // Add more protein keywords and URLs as needed
    ];

const ppiPages = [
        { keyword: "CA7", url: "node_CA7.html" },{ keyword: "GUCA2B", url: "node_GUCA2B.html" },
        { keyword: "GUCA2A", url: "node_GUCA2A.html" },{ keyword: "PYY", url: "node_PYY.html" },
    { keyword: "CA1", url: "node_CA1.html" },{ keyword: "GCG", url: "node_GCG.html" },
    { keyword: "CA2", url: "node_CA2.html" },{ keyword: "SLC26A2", url: "node_SLC26A2.html" },
    { keyword: "MS4A12", url: "node_MS4A12.html" },{ keyword: "SLC4A4", url: "node_SLC4A4.html" },
    { keyword: "CA4", url: "node_CA4.html" },{ keyword: "CD177", url: "node_CD177.html" },
    { keyword: "CHGA", url: "node_CHGA.html" },{ keyword: "ZG16", url: "node_ZG16.html" },
    { keyword: "SCNN1B", url: "node_SCNN1B.html" },{ keyword: "MT1H", url: "node_MT1H.html" },
    { keyword: "SPIB", url: "node_SPIB.html" },{ keyword: "NXPE4", url: "node_NXPE4.html" },
    { keyword: "UGT2A3", url: "node_UGT2A3.html" },{ keyword: "MT1M", url: "node_MT1M.html" },
    { keyword: "HSD11B2", url: "node_HSD11B2.html" },{ keyword: "GPT", url: "node_GPT.html" },
        // Add more protein keywords and URLs as needed
    ];



    // Add event listeners for both search boxes
    document.getElementById('searchBox1').addEventListener('input', () => updateSuggestions('searchBox1', 'suggestion-list1', genePages));
    document.getElementById('searchBox1').addEventListener('keydown', handleKeyNavigation.bind(null, 'suggestion-list1'));
    document.getElementById('searchBox2').addEventListener('input', () => updateSuggestions('searchBox2', 'suggestion-list2', proteinPages));
    document.getElementById('searchBox2').addEventListener('keydown', handleKeyNavigation.bind(null, 'suggestion-list2'));
    document.getElementById('searchBox3').addEventListener('input', () => updateSuggestions('searchBox3', 'suggestion-list3', pathwayPages));
    document.getElementById('searchBox3').addEventListener('keydown', handleKeyNavigation.bind(null, 'suggestion-list3'));
    document.getElementById('searchBox4').addEventListener('input', () => updateSuggestions('searchBox4', 'suggestion-list4', compoundsPages));
    document.getElementById('searchBox4').addEventListener('keydown', handleKeyNavigation.bind(null, 'suggestion-list4'));
    document.getElementById('searchBox5').addEventListener('input', () => updateSuggestions('searchBox5', 'suggestion-list5', ppiPages));
    document.getElementById('searchBox5').addEventListener('keydown', handleKeyNavigation.bind(null, 'suggestion-list5'));

    document.addEventListener('click', clearSuggestions);

    function performSearch(searchTerm, pages) {
        const result = document.getElementById('result');
        
        // Clear previous result
        result.innerHTML = '';

        if (searchTerm) {
            const match = pages.find(page => searchTerm.includes(page.keyword.toLowerCase()));
            
            if (match) {
                window.location.href = match.url;
            } else {
                result.textContent = 'No results found';
            }
        } else {
            result.textContent = 'Please enter a search term';
        }
    }

    function updateSuggestions(searchBoxId, suggestionListId, pages) {
        const searchBox = document.getElementById(searchBoxId);
        const searchTerm = searchBox.value.toLowerCase();
        const suggestionList = document.getElementById(suggestionListId);

        // Clear previous suggestions
        suggestionList.innerHTML = '';

        if (searchTerm) {
            const matches = pages.filter(page => page.keyword.toLowerCase().includes(searchTerm));

            if (matches.length > 0) {
                matches.forEach(match => {
                    const div = document.createElement('div');
                    div.textContent = match.keyword;
                    div.tabIndex = 0;
                    div.addEventListener('click', () => {
                        searchBox.value = match.keyword;
                        suggestionList.style.display = 'none';
                        performSearch(match.keyword.toLowerCase(), pages);
                    });
                    suggestionList.appendChild(div);
                });
                suggestionList.style.display = 'block';
            } else {
                suggestionList.style.display = 'none';
            }
        } else {
            suggestionList.style.display = 'none';
        }
    }

    function handleKeyNavigation(suggestionListId, event) {
        const searchBox = event.target;
        const suggestionList = document.getElementById(suggestionListId);
        const suggestions = suggestionList.querySelectorAll('div');

        if (suggestions.length === 0) return;

        let currentIndex = Array.from(suggestions).indexOf(document.activeElement);

        if (event.key === 'ArrowDown') {
            event.preventDefault();
            currentIndex = (currentIndex + 1) % suggestions.length;
            suggestions[currentIndex].focus();
        } else if (event.key === 'ArrowUp') {
            event.preventDefault();
            currentIndex = (currentIndex - 1 + suggestions.length) % suggestions.length;
            suggestions[currentIndex].focus();
        } else if (event.key === 'Enter') {
            event.preventDefault();
            if (currentIndex >= 0) {
                searchBox.value = suggestions[currentIndex].textContent;
                suggestionList.style.display = 'none';
                if (suggestionListId === 'suggestion-list1') {
                    performSearch(suggestions[currentIndex].textContent.toLowerCase(), genePages);
                } else if (suggestionListId === 'suggestion-list2') {
                    performSearch(suggestions[currentIndex].textContent.toLowerCase(), proteinPages);
                } else if (suggestionListId === 'suggestion-list3') {
                    performSearch(suggestions[currentIndex].textContent.toLowerCase(), pathwayPages);
                } else if (suggestionListId === 'suggestion-list4') {
                    performSearch(suggestions[currentIndex].textContent.toLowerCase(), compoundsPages);
                } else if (suggestionListId === 'suggestion-list5') {
                    performSearch(suggestions[currentIndex].textContent.toLowerCase(), ppiPages);
                }
            }
        }
    }

    function clearSuggestions(event) {
        const suggestionLists = document.querySelectorAll('.suggestion-list');
        suggestionLists.forEach(list => {
            if (!list.contains(event.target) && event.target.id !== 'searchBox1' && event.target.id !== 'searchBox2' && event.target.id !== 'searchBox3' && event.target.id !== 'searchBox4' && event.target.id !== 'searchBox5') {
                list.style.display = 'none';
            }
        });
    }