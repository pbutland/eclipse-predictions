# Predictions for Solar and Lunar Eclipses

Eclipse Predictions by Fred Espenak, [www.EclipseWise.com](https://www.eclipsewise.com)

This repository contains the data for the [Six Millennium Catalog of Lunar Eclipses](https://www.eclipsewise.com/lunar/LEcatalog/LEcatalog.html) and the [Six Millennium Catalog of Solar Eclipses](https://www.eclipsewise.com/solar/SEcatalog/SEcatalog.html) in JSON format.

This repository has no affiliation with Fred Espenak.  For all licensing information pertaining to the use of the data within this repository, please refer to to [www.EclipseWise.com](https://www.eclipsewise.com).

The original data can be found at the above links.  The converted data can be found under the [data](data) directory within this repository.

## Key to Catalog of Solar Eclipses

The following information has been sourced from [www.eclipsewise.com/solar/SEhelp/SEcatkey.html](https://www.eclipsewise.com/solar/SEhelp/SEcatkey.html) and altered slightly to match the format of the JSON representation of the data within this repository.

The main differences between the JSON format and the original dataset are:
* parameter names have been converted into valid JSON property names
* the original `Calendar Date` and `TD of Greatest Eclipse` values have been combined into one [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date
* Latitude and longitude values have been converted into [decimal degrees](https://en.wikipedia.org/wiki/Decimal_degrees)
* `Central Dur` has been converted from minutes and seconds into seconds

| Property name       | Description |
| ------------------- | ----------- |
| tdOfGreatestEclipse | the calendar date of the eclipse at the instant of [Greatest Eclipse](https://www.eclipsewise.com/solar/SEhelp/SEglossary.html#greatest) combined with the [Terrestrial Dynamical Time (TD)](https://www.eclipsewise.com/help/glossary.html#TD) of the eclipse at the instant of [Greatest Eclipse](https://www.eclipsewise.com/solar/SEhelp/SEglossary.html#greatest) in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format; the [Gregorian Calendar](https://www.eclipsewise.com/help/glossary.html#gregoriancal) is used for dates after 1582 Oct 15, while the older [Julian Calendar](https://www.eclipsewise.com/help/glossary.html#juliancal) is used for prior dates; |
| deltaT              | a measure of the accumulated clock error due to variations in the rotation period of Earth; [deltaT](https://www.eclipsewise.com/help/deltat.html) is the difference between [Terrestrial Dynamical Time (TD)](https://www.eclipsewise.com/help/glossary.html#TD) and [Universal Time (UT1)](https://www.eclipsewise.com/help/glossary.html#UT1) (i.e., deltaT = TD - UT1);  |
| deltaTSigma         | a measure of the standard error in [deltaT](https://www.eclipsewise.com/help/deltat.html); values of *deltaT* in the distant past and in the future are extrapolations with an *uncertainty* reflected in the value of *deltaTSigma*; |
| lunaNum             | the [Lunation Number](https://www.eclipsewise.com/help/glossary.html#lunation) of the [synodic month](https://www.eclipsewise.com/help/glossary.html#synodicmonth) in which the solar eclipse takes place; |
| saros               | the number of the [Saros](https://www.eclipsewise.com/solar/SEhelp/SEglossary.html#saros) series to which the eclipse belongs;       |
| eclType             | the *Eclipse Type* is a 2-character code that describes the classification of an eclipse; <br>The first character describes the kind or category of the eclipse where: <ul><li>P  = Partial Solar Eclipse</li><li>A  = Annular Solar Eclipse</li><li>T  = Total Solar Eclipse</li><li>H  = Hybrid or Annular/Total Solar Eclipse</li></ul>The second character in *Eclipse Type* is define as:<ul><li>"m" = Middle eclipse of Saros series</li><li>"n" = Central eclipse with no northern limit</li><li>"s" = Central eclipse with no southern limit</li><li>"+" = Non-central eclipse with no northern limit</li><li>"-" = Non-central eclipse with no southern limit</li><li>"2" = Hybrid path begins total and ends annular</li><li>"3" = Hybrid path begins annular and ends total</li><li>"b" = Saros series begins (first clipse in series)</li><li>"e" = Saros series ends (last eclipse in series)</li></ul> |
| qle                 | the *Quincena Lunar Eclipse* parameter identifies the type of lunar eclipse that precedes and/or succeeds a solar eclipse where:<ul><li>n = penumbral lunar eclipse (Moon passes partly or completely within Earth’s penumbral shadow)</li><li>p = partial lunar eclipse (Moon passes partly within Earth’s umbral shadow)</li><li>t = total lunar eclipse (Moon passes completely within Earth’s umbral shadow)</li></ul> |
| gamma        | the distance (in units of equatorial Earth radii) of the Moon’s shadow cone axis from the center of Earth at the instant of [Greatest Eclipse](https://www.eclipsewise.com/solar/SEhelp/SEglossary.html#greatest); since this is the instant when the Moon’s shadow passes closest to the center of Earth, [Gamma](https://www.eclipsewise.com/solar/SEhelp/SEglossary.html#gamma) is, by definition, the minimum distance of the shadow axis from center of Earth; |
| eclMag       | the [Eclipse Magnitude](https://www.eclipsewise.com/solar/SEhelp/SEglossary.html#magnitude) is the fraction of the Sun’s *diameter* occulted by the Moon at the instant of [Greatest Eclipse](https://www.eclipsewise.com/solar/SEhelp/SEglossary.html#greatest). The *Eclipse Magnitude* is less that 1.0 for *partial* and *annular* solar eclipses; the *Eclipse Magnitude* is equal to or greater than 1.0 for *total* solar eclipses; |
| lat          | the *Latitude* is the geographic latitude where the axis of the Moon's shadow intersects with Earth's surface at the instant of [Greatest Eclipse](https://www.eclipsewise.com/solar/SEhelp/SEglossary.html#greatest); for *partial* and *non-central* eclipses, it is the geographic latitude where the axis of the Moon's shadow passes closest to; |
| long         | the *Longitude* is the geographic longitude where the axis of the Moon's shadow intersects with Earth's surface at the instant of [Greatest Eclipse](https://www.eclipsewise.com/solar/SEhelp/SEglossary.html#greatest); for *partial* and *non-central* eclipses, it is the geographic longitude where the axis of the Moon's shadow passes closest to; |
| sunAlt       | the *Sun Altitude* is the altitude of the Sun above the horizon from the geographic location and time of [Greatest Eclipse](https://www.eclipsewise.com/solar/SEhelp/SEglossary.html#greatest); for *partial* and *non-central* eclipses, the *Sun Altitude* is 0° because the Sun is in the horizon; |
| pathWidth    | the width (in kilometers) of the path of *totality* or *annularity* from the geographic location of [Greatest Eclipse](https://www.eclipsewise.com/solar/SEhelp/SEglossary.html#greatest); |
| centralDur   | the *Central Duration* is the duration (in seconds) of *totality* or *annularity* from the geographic location of [Greatest Eclipse](https://www.eclipsewise.com/solar/SEhelp/SEglossary.html#greatest); |


## Key to Catalog of Lunar Eclipses

The following information has been sourced from [www.eclipsewise.com/lunar/LEhelp/LEcatkey.html](https://www.eclipsewise.com/lunar/LEhelp/LEcatkey.html) and altered slightly to match the format of the JSON representation of the data within this repository.

The main differences between the JSON format and the original dataset are:
* parameter names have been converted into valid JSON property names
* the original `Calendar Date` and `TD of Greatest Eclipse` values have been combined into one [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date.
* Latitude and longitude values have been converted into [decimal degrees](https://en.wikipedia.org/wiki/Decimal_degrees)

| Property Name       | Description |
|---------------------|-------------|
| tdOfGreatestEclipse | the calendar date of the eclipse at the instant of [Greatest Eclipse](https://www.eclipsewise.com/lunar/LEhelp/LEglossary.html#greatest) combined with the [Terrestrial Dynamical Time (TD)](https://www.eclipsewise.com/help/glossary.html#TD) of the eclipse at the instant of [Greatest Eclipse](https://www.eclipsewise.com/lunar/LEhelp/LEglossary.html#greatest) in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format; the [Gregorian Calendar](https://www.eclipsewise.com/help/glossary.html#gregoriancal) is used for dates after 1582 Oct 15, while the older [Julian Calendar](https://www.eclipsewise.com/help/glossary.html#juliancal) is used for prior dates; |
| deltaT              | a measure of the accumulated clock error due to variations in the rotation period of Earth; [deltaT](https://www.eclipsewise.com/help/deltat.html) is the difference between [Terrestrial Dynamical Time (TD)](https://www.eclipsewise.com/help/glossary.html#TD) and [Universal Time (UT1)](https://www.eclipsewise.com/help/glossary.html#UT1) (i.e., deltaT = TD - UT1);  |
| deltaTSigma         | a measure of the standard error in [deltaT](https://www.eclipsewise.com/help/deltat.html); values of *deltaT* in the distant past and in the future are extrapolations with an *uncertainty* reflected in the value of *deltaTSigma*; |
| lunaNum             | the [Lunation Number](https://www.eclipsewise.com/help/glossary.html#lunation) of the [synodic month](https://www.eclipsewise.com/help/glossary.html#synodicmonth) in which the solar eclipse takes place; |
| saros               | the number of the [Saros](https://www.eclipsewise.com/lunar/LEhelp/LEglossary.html#saros) series to which the eclipse belongs;       |
| eclType | the *Eclipse Type* is a 2-character code that describes the classification of an eclipse; <br> The first character describes the kind or category of the eclipse where: <ul><li>N  = Penumbral Lunar Eclipse</li><li>P  = Partial Lunar Eclipse (in umbra)</li><li>T  = Total Lunar Eclipse (in umbra)</li></ul>The second character in <strong>Eclipse Type</strong> is define as:<ul><li>"m" = Middle eclipse of Saros series</li><li>"+" = Central total eclipse (Moon's center passes north of shadow axis)</li><li>"-" = Central total eclipse (Moon's center passes south of shadow axis)</li><li>"*" = Total penumbral lunar eclipse</li><li>"b" = Saros series begins (first penumbral eclipse in series)</li><li>"e" = Saros series ends (last penumbral eclipse in series)</li></ul> |
| qse | the *Quincena Solar Eclipse* parameter identifies the type of solar eclipse that precedes and/or succeeds a lunar eclipse where:<ul><li>p = partial solar eclipse (Moon’s penumbral shadow traverses Earth)</li><li>a = annular solar eclipse (Moon’s antumbral shadow traverses Earth)</li><li>t = total solar eclipse (Moon’s umbral shadow traverses Earth)</li><li>h = hybrid solar eclipse (Moon’s umbral and antumbral shadows traverse Earth; also known as an annular-total eclipse)</li></ul> |
| gamma | the distance (in units of equatorial Earth radii) of the center of the Moon’s disk from the center of Earth’s shadow at the instant of [Greatest Eclipse](https://www.eclipsewise.com/lunar/LEhelp/LEglossary.html#greatest); since this is the instant when the Moon passes closest to the axis of Earth’s umbral shadow, [Gamma](https://www.eclipsewise.com/lunar/LEhelp/LEglossary.html#gamma) is, by definition, the minimum distance of the shadow axis from center of the Moon; |
| penMag | the [Penumbral Eclipse Magnitude](https://www.eclipsewise.com/lunar/LEhelp/LEglossary.html#pmagnitude) is the fraction of the Moon’s *diameter* occulted by Earth’s penumbral shadow at the instant of [Greatest Eclipse](https://www.eclipsewise.com/lunar/LEhelp/LEglossary.html#greatest); <br>the *Penumbral Eclipse Magnitude* is less that 1.0 for *partial* penumbral eclipses (and equal to or greater than 1.0 for *total* penumbral eclipses); the *Penumbral Eclipse Magnitude* is equal to or greater than 1.0 for most *partial* eclipses and for all *total* eclipses; |
| umMag | the [Umbral Eclipse Magnitude](https://www.eclipsewise.com/lunar/LEhelp/LEglossary.html#umagnitude) is the fraction of the Moon’s *diameter* occulted by Earth’s umbral shadow at the instant of *[Greatest Eclipse](https://www.eclipsewise.com/lunar/LEhelp/LEglossary.html#greatest)*; the *Umbral Eclipse Magnitude* is less that 1.0 for *partial* eclipses (and less than 0.0 for *penumbral* eclipses); the *Umbral Eclipse Magnitude* is equal to or greater than 1.0 for *total* eclipses; |
| penDur | the *Penumbral Duration* is the elapsed time (hours, minutes, seconds) between the *penumbral* contacts P1 and P4; this is the duration of the penumbral phase for *penumbral* eclipses;<br>for *partial* and *total* eclipses, this period encompasses the entire eclipse (including all penumbral, partial and total phases); see [Contact Times](https://www.eclipsewise.com/lunar/LEhelp/LEcontactskey.html) for more information; |
| parDur | the *Partial Duration* is the elapsed time (hours, minutes, seconds) between *umbral* contacts U1 and U4; this is the duration of the partial phase for *partial* eclipses;<br>for *total* eclipses, this period encompasses the entire umbral eclipse (including all partial and total phases); see [Contact Times](https://www.eclipsewise.com/lunar/LEhelp/LEcontactskey.html) for more information; |
| totDur | the *Total Duration* is the elapsed time (hours, minutes, seconds) between *umbral* contacts U2 and U3; this is the duration of the total phase for *total* eclipses;<br>see [Contact Times](https://www.eclipsewise.com/lunar/LEhelp/LEcontactskey.html) for more information; |
| zenLat | the *Zenith Latitude* is the geographic latitude where the Moon appears in the zenith at the instant of [Greatest Eclipse](https://www.eclipsewise.com/lunar/LEhelp/LEglossary.html#greatest); |
| zenLong | the *Zenith Longitude* is the geographic longitude where the Moon appears in the zenith at the instant of [Greatest Eclipse](https://www.eclipsewise.com/lunar/LEhelp/LEglossary.html#greatest); |

## Conversion code

Along with the data for eclipse predictions, this repository also contains the source code used to
transform the original information on the [www.EclipseWise.com](https://www.eclipsewise.com) site.

You can follow the instructions below should you wish to convert any of the files yourself.

### Requirements

* [Node.js](https://nodejs.org/en)
* [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)
* [curl](https://curl.se) - for downloading original HTML files

### Download files

Execute the following command to download all of the original HTML files from the [www.EclipseWise.com](https://www.eclipsewise.com) site for both solar and lunar eclipses.

```
yarn download
```

The full usage if you want to be more specific:

```
yarn download [solar|lunar] [startYear] [endYear]
```
e.g.
```
yarn download solar 2001 2100
```

### Convert HTML to JSON

Execute the following command to convert HTML data into a JSON format:

```
yarn convert <outputDir> <file> [file2] ...
```
e.g.
```
yarn convert ./output ./html/solar/*
```

### Serve the JSON files using a web server

For convenience there is also a simple web server included that can be used to serve up the JSON files locally.
Simply execute the following command:

```
yarn serve
```

Files can then be accessed from the URL `http://localhost:3000`.
e.g.
```
http://localhost:3000/solar/SE2001-2100/.json
http://localhost:3000/lunar/LE2001-2100/.json
```

Alternatively, the files can be access directly from Github using the raw URL, e.g. `https://raw.githubusercontent.com/pbutland/eclipse-predictions/refs/heads/main/data/solar/SE2001-2100.json`