class Settings {
    static GameClass = Prototype;
    
    static Layers = {
        PLAYER: 0,
        GROUND: 1
    };

    static LayerInteractions = {
        [Settings.Layers.PLAYER]: [Settings.Layers.GROUND]
    };

    static BackgroundColor = "#FFF";

    static GameWidth = 800;
    static GameHeight = 600;

    static Debug = false;
    static ShowStats = true;
    static ShowGrid = false;
    static GridSize = 50;
}