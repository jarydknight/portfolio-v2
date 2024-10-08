import AboutTable from "../aboutTable";
import aboutSDEData from "../../../data/aboutSDE.json";

function AboutSdeSection () {
    return (
        <div className="grid">
            <p className="my-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ullamcorper leo vel suscipit egestas. Etiam sollicitudin nisl leo, a vulputate enim interdum id. Vestibulum vitae tristique metus. Morbi id nisi elit. Curabitur volutpat pulvinar ligula a volutpat. Phasellus in urna magna. Quisque varius aliquet tortor, sit amet ultrices diam interdum a. Fusce maximus nunc diam, ut pretium lectus pharetra at. Proin consequat, ipsum id vehicula commodo, dui nunc ultricies nisl, sed auctor arcu justo a risus. Sed et varius velit. Mauris leo felis, efficitur id euismod a, tristique at enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi ornare nibh a felis varius bibendum.

            Maecenas mollis nulla sit amet ex egestas viverra. Integer lacinia id sem et sagittis. Proin maximus purus est, condimentum faucibus dui rutrum bibendum. Nulla tempor, neque at porttitor tempus, nunc lacus vulputate nunc, iaculis hendrerit nunc urna vel odio. Curabitur.
            </p>

            <AboutTable data={aboutSDEData} />
        </div>
    )
};

export default AboutSdeSection;