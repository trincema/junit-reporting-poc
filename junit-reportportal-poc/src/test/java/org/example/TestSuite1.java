package org.example;

import com.epam.reportportal.junit5.ReportPortalExtension;
import org.junit.jupiter.api.extension.ExtendWith;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.junit.jupiter.api.*;

@ExtendWith(ReportPortalExtension.class)
public class TestSuite1 {

    private static final Logger LOGGER = LogManager.getLogger(TestSuite1.class);

    @Test
    void testCase1() {
        assert false;
        LOGGER.info("Hello from my simple test");
    }

    @Test
    void testCase2() {
        assert false;
    }
}