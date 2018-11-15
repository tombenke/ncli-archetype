export files="docs/about.md docs/getHelp.md docs/getStarted.md docs/pageTemplate.html index.html package.json src/config.js README.md"
for f in $files; do
    sed -f .kickoff.sed -i $f
done
